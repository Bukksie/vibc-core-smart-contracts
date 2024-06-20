// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {DispatcherUpdateClientTestSuite} from "../Dispatcher/Dispatcher.client.t.sol";
import {DispatcherIbcWithRealProofsSuite} from "../Dispatcher/Dispatcher.proof.t.sol";
import {Mars} from "../../contracts/examples/Mars.sol";
import "../../contracts/core/OptimisticLightClient.sol";
import {ChannelHandshakeTestSuite, ChannelHandshakeTest, ChannelHandshakeUtils} from "../Dispatcher/Dispatcher.t.sol";
import {LocalEnd} from "../utils/Dispatcher.base.t.sol";
import {Base, ChannelHandshakeSetting} from "../utils/Dispatcher.base.t.sol";
import {
    ChannelEnd,
    ChannelOrder,
    ChannelState,
    IbcEndpoint,
    IbcPacket,
    AckPacket,
    Ibc,
    Height
} from "../../contracts/libs/Ibc.sol";
import {IbcUtils} from "../../contracts/libs/IbcUtils.sol";
import {IbcReceiver, IbcChannelReceiver} from "../../contracts/interfaces/IbcReceiver.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import {OptimisticLightClient} from "../../contracts/core/OptimisticLightClient.sol";
import {IProofVerifier} from "../../contracts/core/OptimisticProofVerifier.sol";
import {DummyLightClient} from "../../contracts/utils/DummyLightClient.sol";
import {Dispatcher} from "../../contracts/core/Dispatcher.sol";

import {IDispatcher} from "../../contracts/interfaces/IDispatcher.sol";
import {UniversalChannelHandler} from "../../contracts/core/UniversalChannelHandler.sol";
import {IUniversalChannelHandler} from "../../contracts/interfaces/IUniversalChannelHandler.sol";
import {DispatcherRc4} from "../upgradeableProxy/upgrades/DispatcherRc4.sol";
import {UniversalChannelHandlerV2} from "../upgradeableProxy/upgrades/UCHV2.sol";
import {DispatcherV2Initializable} from "../upgradeableProxy/upgrades/DispatcherV2Initializable.sol";
import {DispatcherV2} from "../upgradeableProxy/upgrades/DispatcherV2.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import {ChannelHandShakeUpgradeUtil, UpgradeTestUtils} from "../upgradeableProxy/UpgradeUtils.t.sol";
import "forge-std/Test.sol";

struct ChainAddresses {
    IDispatcher dispatcherProxy;
    IUniversalChannelHandler uch;
    ILightClient dummyLightClient;
    ILightClient optimisticLightClient;
    address owner; // Owner Address of dispatcher
}

contract DispatcherUpgradeTest is ChannelHandShakeUpgradeUtil, UpgradeTestUtils {
    string newPortPrefix = "port-ID-2";

    function setUp() public override {
        ChainAddresses memory addresses = ChainAddresses(
            IDispatcher(vm.envAddress("DispatcherProxy")),
            IUniversalChannelHandler(vm.envAddress("UC")),
            ILightClient(vm.envAddress("LightClient")),
            ILightClient(vm.envAddress("LightClient")),
            vm.envAddress("OWNER")
        );
        address targetMarsAddress = 0x71C95911E9a5D330f4D621842EC243EE1343292e; // Need to have this mars address so we
            // can test proof verifcation path

        dispatcherProxy = addresses.dispatcherProxy;
        string memory dispatcherPortPrefix = dispatcherProxy.portPrefix();
        deployCodeTo("contracts/examples/Mars.sol:Mars", abi.encode(address(dispatcherProxy)), targetMarsAddress);
        vm.prank(addresses.owner); // Only sender should have permission
        dispatcherProxy.setClientForConnection(connectionHops[0], dummyLightClient);
        mars = new Mars(dispatcherProxy);
        string memory sendingPortId = IbcUtils.addressToPortId(dispatcherPortPrefix, address(mars));
        string memory receivingPortId = IbcUtils.addressToPortId(dispatcherPortPrefix, targetMarsAddress);
        _local = LocalEnd(mars, sendingPortId, "channel-1", connectionHops, "1.0", "1.0");
        _remote = ChannelEnd(receivingPortId, "channel-2", "1.0");

        // Add state to test if impacted by upgrade
        doChannelHandshake(_local, _remote);
        sendPacket(_local.channelId);

        // Upgrade dispatcherProxy for tests
        vm.startPrank(addresses.owner);
        upgradeDispatcher(newPortPrefix, feeVault, address(dispatcherProxy));
    }

    function test_Deployment_SentPacketState_Conserved() public {
        uint64 nextSequenceSendValue = uint64(
            uint256(vm.load(address(dispatcherProxy), findNextSequenceSendSlot(address(mars), _local.channelId)))
        );

        assertEq(4, nextSequenceSendValue);

        // packets
        assert(vm.load(address(dispatcherProxy), findSendPacketCommitmentSlot(address(mars), _local.channelId, 1)) > 0);
        assert(vm.load(address(dispatcherProxy), findSendPacketCommitmentSlot(address(mars), _local.channelId, 2)) > 0);
        assert(vm.load(address(dispatcherProxy), findSendPacketCommitmentSlot(address(mars), _local.channelId, 3)) > 0);

        // Test sending packet with the updated contract
        sendOnePacket(_local.channelId, 4, mars);
        assert(vm.load(address(dispatcherProxy), findSendPacketCommitmentSlot(address(mars), _local.channelId, 4)) > 0);
        uint64 nextSequenceSendAfterSending = uint64(
            uint256(vm.load(address(dispatcherProxy), findNextSequenceSendSlot(address(mars), _local.channelId)))
        );
        assertEq(5, nextSequenceSendAfterSending);
    }

    function test_Deployment_OpenChannelState_Conserved() public {
        // State should be conserved after upgrade
        uint64 nextSequenceRecvValue =
            uint64(uint256(vm.load(address(dispatcherProxy), findNextSequenceRecv(address(mars), _local.channelId))));
        uint64 nextSequenceAckValue =
            uint64(uint256(vm.load(address(dispatcherProxy), findNextSequenceAck(address(mars), _local.channelId))));

        assertEq(1, nextSequenceRecvValue);
        assertEq(1, nextSequenceAckValue);
    }
}