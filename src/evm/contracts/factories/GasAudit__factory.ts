/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { GasAudit, GasAuditInterface } from "../GasAudit";

const _abi = [
  {
    type: "function",
    name: "callWithBytes32",
    inputs: [
      {
        name: "portAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "counterpartyPortId",
        type: "string",
        internalType: "string",
      },
      {
        name: "coutnerpartyChannelId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "callWithString",
    inputs: [
      {
        name: "portAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "channelId",
        type: "string",
        internalType: "string",
      },
      {
        name: "counterpartyPortId",
        type: "string",
        internalType: "string",
      },
      {
        name: "coutnerpartyChannelId",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "channelIds1",
    inputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "channelIds2",
    inputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "OpenIbcChannel1",
    inputs: [
      {
        name: "portAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "channelId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "counterpartyPortId",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "coutnerpartyChannelId",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OpenIbcChannel2",
    inputs: [
      {
        name: "portAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "channelId",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "counterpartyPortId",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "coutnerpartyChannelId",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506104fc806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063187c35e514610051578063485b39b5146100935780635160f9e7146100a8578063fca6eb29146100cb575b600080fd5b61007f61005f3660046101e4565b805160208183018101805160018252928201919093012091525460ff1681565b604051901515815260200160405180910390f35b6100a66100a13660046102fa565b6100de565b005b61007f6100b63660046103a5565b60006020819052908152604090205460ff1681565b6100a66100d93660046103be565b610165565b60018087876040516100f1929190610420565b908152604051908190036020018120805492151560ff19909316929092179091556001600160a01b038816907f57ddcf2e4fd363065bccadcdb56928237fb413c06e42c021b0dca4a3b8e580519061015490899089908990899089908990610459565b60405180910390a250505050505050565b60008481526020819052604090819020805460ff191660011790555184906001600160a01b038716907f9bfa7e679cc290246349f80646c1c53a881353ed5b17ad82b5eb6ba283718155906101bf908790879087906104a2565b60405180910390a35050505050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156101f657600080fd5b813567ffffffffffffffff8082111561020e57600080fd5b818401915084601f83011261022257600080fd5b813581811115610234576102346101ce565b604051601f8201601f19908116603f0116810190838211818310171561025c5761025c6101ce565b8160405282815287602084870101111561027557600080fd5b826020860160208301376000928101602001929092525095945050505050565b80356001600160a01b03811681146102ac57600080fd5b919050565b60008083601f8401126102c357600080fd5b50813567ffffffffffffffff8111156102db57600080fd5b6020830191508360208285010111156102f357600080fd5b9250929050565b60008060008060008060006080888a03121561031557600080fd5b61031e88610295565b9650602088013567ffffffffffffffff8082111561033b57600080fd5b6103478b838c016102b1565b909850965060408a013591508082111561036057600080fd5b61036c8b838c016102b1565b909650945060608a013591508082111561038557600080fd5b506103928a828b016102b1565b989b979a50959850939692959293505050565b6000602082840312156103b757600080fd5b5035919050565b6000806000806000608086880312156103d657600080fd5b6103df86610295565b945060208601359350604086013567ffffffffffffffff81111561040257600080fd5b61040e888289016102b1565b96999598509660600135949350505050565b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60608152600061046d60608301888a610430565b8281036020840152610480818789610430565b90508281036040840152610495818587610430565b9998505050505050505050565b6040815260006104b6604083018587610430565b905082602083015294935050505056fea2646970667358221220c3eae859de56ac134ecfcdfaf023335abf1d0aa652e744078b0a40ce95d13d5764736f6c634300080f0033";

type GasAuditConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GasAuditConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GasAudit__factory extends ContractFactory {
  constructor(...args: GasAuditConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      GasAudit & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): GasAudit__factory {
    return super.connect(runner) as GasAudit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasAuditInterface {
    return new Interface(_abi) as GasAuditInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): GasAudit {
    return new Contract(address, _abi, runner) as unknown as GasAudit;
  }
}