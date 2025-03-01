/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Earth, EarthInterface } from "../Earth";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_middleware",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "ackPackets",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "packet",
        type: "tuple",
        internalType: "struct UniversalPacket",
        components: [
          {
            name: "srcPortAddr",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "mwBitmap",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destPortAddr",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "appData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "ack",
        type: "tuple",
        internalType: "struct AckPacket",
        components: [
          {
            name: "success",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "authorizeChannel",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorizeMiddleware",
    inputs: [
      {
        name: "middleware",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorizedChannelIds",
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
    name: "authorizedMws",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
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
    name: "generateAckPacket",
    inputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "srcPortAddr",
        type: "address",
        internalType: "address",
      },
      {
        name: "appData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "ackPacket",
        type: "tuple",
        internalType: "struct AckPacket",
        components: [
          {
            name: "success",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "greet",
    inputs: [
      {
        name: "destPortAddr",
        type: "address",
        internalType: "address",
      },
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "message",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "timeoutTimestamp",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "greetWithFee",
    inputs: [
      {
        name: "destPortAddr",
        type: "address",
        internalType: "address",
      },
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "message",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "timeoutTimestamp",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "gasLimits",
        type: "uint256[2]",
        internalType: "uint256[2]",
      },
      {
        name: "gasPrices",
        type: "uint256[2]",
        internalType: "uint256[2]",
      },
    ],
    outputs: [
      {
        name: "sequence",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "mw",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "onRecvUniversalPacket",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "packet",
        type: "tuple",
        internalType: "struct UniversalPacket",
        components: [
          {
            name: "srcPortAddr",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "mwBitmap",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destPortAddr",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "appData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "ackPacket",
        type: "tuple",
        internalType: "struct AckPacket",
        components: [
          {
            name: "success",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onTimeoutUniversalPacket",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "packet",
        type: "tuple",
        internalType: "struct UniversalPacket",
        components: [
          {
            name: "srcPortAddr",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "mwBitmap",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destPortAddr",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "appData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onUniversalAcknowledgement",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "packet",
        type: "tuple",
        internalType: "struct UniversalPacket",
        components: [
          {
            name: "srcPortAddr",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "mwBitmap",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destPortAddr",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "appData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "ack",
        type: "tuple",
        internalType: "struct AckPacket",
        components: [
          {
            name: "success",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "recvedPackets",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "packet",
        type: "tuple",
        internalType: "struct UniversalPacket",
        components: [
          {
            name: "srcPortAddr",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "mwBitmap",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destPortAddr",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "appData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setDefaultMw",
    inputs: [
      {
        name: "_middleware",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "timeoutPackets",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "packet",
        type: "tuple",
        internalType: "struct UniversalPacket",
        components: [
          {
            name: "srcPortAddr",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "mwBitmap",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destPortAddr",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "appData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "UnauthorizedIbcMiddleware",
    inputs: [],
  },
  {
    type: "error",
    name: "ackAddressMismatch",
    inputs: [],
  },
  {
    type: "error",
    name: "ackDataTooShort",
    inputs: [],
  },
  {
    type: "error",
    name: "invalidChannelId",
    inputs: [],
  },
  {
    type: "error",
    name: "unauthorizedChannel",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162001a0238038062001a02833981016040819052610031916100d7565b808061003c33610087565b600180546001600160a01b0319166001600160a01b03831617905561007f816001600160a01b03166000908152600260205260409020805460ff19166001179055565b505050610107565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100e957600080fd5b81516001600160a01b038116811461010057600080fd5b9392505050565b6118eb80620001176000396000f3fe60806040526004361061010c5760003560e01c80635b7615851161009557806392dfa3921161006457806392dfa3921461032b578063a742d78c1461034b578063d24ba0241461036b578063f12b758a1461038b578063f2fde38b146103ab57600080fd5b80635b76158514610297578063715018a6146102c4578063866f3f97146102d95780638da5cb5b146102f957600080fd5b80633b90b042116100dc5780633b90b042146101da578063400d9f5d146101fa5780634252ae9b1461021a5780634eeb739114610249578063588152ca1461027757600080fd5b8062e82cef146101185780632466911c1461013a5780632eed7c701461016a5780633a7fbcbd146101aa57600080fd5b3661011357005b600080fd5b34801561012457600080fd5b50610138610133366004610e95565b6103cb565b005b61014d610148366004610ff1565b6103fe565b6040516001600160401b0390911681526020015b60405180910390f35b34801561017657600080fd5b5061019a610185366004611084565b60036020526000908152604090205460ff1681565b6040519015158152602001610161565b3480156101b657600080fd5b5061019a6101c5366004610e95565b60026020526000908152604090205460ff1681565b3480156101e657600080fd5b506101386101f5366004610e95565b61049a565b34801561020657600080fd5b5061013861021536600461109d565b6104ae565b34801561022657600080fd5b5061023a610235366004611084565b61058e565b6040516101619392919061119a565b34801561025557600080fd5b50610269610264366004611084565b610732565b6040516101619291906111cf565b34801561028357600080fd5b506101386102923660046112e7565b610820565b3480156102a357600080fd5b506102b76102b236600461109d565b6109d3565b604051610161919061135a565b3480156102d057600080fd5b50610138610b59565b3480156102e557600080fd5b506102b76102f436600461136d565b610b6d565b34801561030557600080fd5b506000546001600160a01b03165b6040516001600160a01b039091168152602001610161565b34801561033757600080fd5b50610138610346366004611084565b610bc8565b34801561035757600080fd5b50600154610313906001600160a01b031681565b34801561037757600080fd5b506101386103863660046113c6565b610bd9565b34801561039757600080fd5b506102696103a6366004611084565b610c69565b3480156103b757600080fd5b506101386103c6366004610e95565b610c79565b6103d3610cf4565b6103dc81610d4e565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001546000906001600160a01b031663462fdf8334896104248c6001600160a01b031690565b8a8a8a8a8a6040518963ffffffff1660e01b815260040161044b9796959493929190611483565b60206040518083038185885af1158015610469573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061048e91906114d0565b98975050505050505050565b6104a2610cf4565b6104ab81610d4e565b50565b3360009081526002602052604090205460ff166104de57604051630ddfd93d60e11b815260040160405180910390fd5b600082815260036020526040902054829060ff1661050f57604051630100e70560e51b815260040160405180910390fd5b600660405180604001604052808581526020018461052c906114ed565b905281546001818101845560009384526020938490208351600590930201918255838301518051918301918255938401516002830155604084015160038301556060840151929391926004840190610584908261157e565b5050505050505050565b6005818154811061059e57600080fd5b9060005260206000209060070201600091509050806000015490806001016040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820180546105f5906114f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610621906114f9565b801561066e5780601f106106435761010080835404028352916020019161066e565b820191906000526020600020905b81548152906001019060200180831161065157829003601f168201915b5050509190925250506040805180820190915260058401805460ff161515825260068501805494959492935090916020840191906106ab906114f9565b80601f01602080910402602001604051908101604052809291908181526020018280546106d7906114f9565b80156107245780601f106106f957610100808354040283529160200191610724565b820191906000526020600020905b81548152906001019060200180831161070757829003601f168201915b505050505081525050905083565b6006818154811061074257600080fd5b906000526020600020906005020160009150905080600001549080600101604051806080016040529081600082015481526020016001820154815260200160028201548152602001600382018054610799906114f9565b80601f01602080910402602001604051908101604052809291908181526020018280546107c5906114f9565b80156108125780601f106107e757610100808354040283529160200191610812565b820191906000526020600020905b8154815290600101906020018083116107f557829003601f168201915b505050505081525050905082565b3360009081526002602052604090205460ff1661085057604051630ddfd93d60e11b815260040160405180910390fd5b600083815260036020526040902054839060ff1661088157604051630100e70560e51b815260040160405180910390fd5b6014610890602084018461163d565b905010156108b15760405163503b43db60e01b815260040160405180910390fd5b60006108c0602084018461163d565b6108cf91601491600091611683565b6108d8916116ad565b60601c9050806001600160a01b03166108f48560400151610d72565b6001600160a01b03161461091b57604051631863a42d60e31b815260040160405180910390fd5b600560405180606001604052808781526020018681526020018561093e906116f0565b905281546001818101845560009384526020938490208351600790930201918255838301518051918301918255938401516002830155604084015160038301556060840151929391926004840190610996908261157e565b5050506040820151805160058301805460ff1916911515919091178155602082015160068401906109c7908261157e565b50505050505050505050565b6040805180820190915260008152606060208201523360009081526002602052604090205460ff16610a1857604051630ddfd93d60e11b815260040160405180910390fd5b600083815260036020526040902054839060ff16610a4957604051630100e70560e51b815260040160405180910390fd5b6004604051806040016040528086815260200185610a66906114ed565b905281546001818101845560009384526020938490208351600590930201918255838301518051918301918255938401516002830155604084015160038301556060840151929391926004840190610abe908261157e565b5050505050306001600160a01b031663866f3f9785610ae08660000135610d72565b610aed606088018861163d565b6040518563ffffffff1660e01b8152600401610b0c9493929190611748565b600060405180830381865afa158015610b29573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b519190810190611773565b949350505050565b610b61610cf4565b610b6b6000610d83565b565b604080518082019091526000815260606020820152604051806040016040528060011515815260200130868686604051602001610bad9493929190611830565b60408051601f19818403018152919052905295945050505050565b610bd0610cf4565b6104ab81610dd3565b6001546001600160a01b0316631f3a583085610bfb886001600160a01b031690565b8686866040518663ffffffff1660e01b8152600401610c1e95949392919061187a565b6020604051808303816000875af1158015610c3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6191906114d0565b505050505050565b6004818154811061074257600080fd5b610c81610cf4565b6001600160a01b038116610ceb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6104ab81610d83565b6000546001600160a01b03163314610b6b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610ce2565b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b6000610d7d82610e0c565b92915050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80610df157604051631d6f5e8b60e01b815260040160405180910390fd5b6000908152600360205260409020805460ff19166001179055565b60006001600160a01b03821115610e755760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316044820152663630206269747360c81b6064820152608401610ce2565b5090565b80356001600160a01b0381168114610e9057600080fd5b919050565b600060208284031215610ea757600080fd5b610eb082610e79565b9392505050565b60008083601f840112610ec957600080fd5b5081356001600160401b03811115610ee057600080fd5b602083019150836020828501011115610ef857600080fd5b9250929050565b6001600160401b03811681146104ab57600080fd5b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715610f4c57610f4c610f14565b60405290565b604051601f8201601f191681016001600160401b0381118282101715610f7a57610f7a610f14565b604052919050565b600082601f830112610f9357600080fd5b604051604081018181106001600160401b0382111715610fb557610fb5610f14565b8060405250806040840185811115610fcc57600080fd5b845b81811015610fe6578035835260209283019201610fce565b509195945050505050565b6000806000806000806000610100888a03121561100d57600080fd5b61101688610e79565b96506020880135955060408801356001600160401b0381111561103857600080fd5b6110448a828b01610eb7565b909650945050606088013561105881610eff565b92506110678960808a01610f82565b91506110768960c08a01610f82565b905092959891949750929550565b60006020828403121561109657600080fd5b5035919050565b600080604083850312156110b057600080fd5b8235915060208301356001600160401b038111156110cd57600080fd5b8301608081860312156110df57600080fd5b809150509250929050565b60005b838110156111055781810151838201526020016110ed565b83811115611114576000848401525b50505050565b600081518084526111328160208601602086016110ea565b601f01601f19169290920160200192915050565b8051825260208101516020830152604081015160408301526000606082015160806060850152610b51608085018261111a565b8051151582526000602082015160406020850152610b51604085018261111a565b8381526060602082015260006111b36060830185611146565b82810360408401526111c58185611179565b9695505050505050565b828152604060208201526000610b516040830184611146565b60006001600160401b0382111561120157611201610f14565b50601f01601f191660200190565b600082601f83011261122057600080fd5b813561123361122e826111e8565b610f52565b81815284602083860101111561124857600080fd5b816020850160208301376000918101602001919091529392505050565b60006080828403121561127757600080fd5b604051608081016001600160401b03828210818311171561129a5761129a610f14565b8160405282935084358352602085013560208401526040850135604084015260608501359150808211156112cd57600080fd5b506112da8582860161120f565b6060830152505092915050565b6000806000606084860312156112fc57600080fd5b8335925060208401356001600160401b038082111561131a57600080fd5b61132687838801611265565b9350604086013591508082111561133c57600080fd5b5084016040818703121561134f57600080fd5b809150509250925092565b602081526000610eb06020830184611179565b6000806000806060858703121561138357600080fd5b8435935061139360208601610e79565b925060408501356001600160401b038111156113ae57600080fd5b6113ba87828801610eb7565b95989497509550505050565b6000806000806000608086880312156113de57600080fd5b6113e786610e79565b94506020860135935060408601356001600160401b0381111561140957600080fd5b61141588828901610eb7565b909450925050606086013561142981610eff565b809150509295509295909350565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8060005b6002811015611114578151845260209384019390910190600101611464565b60006101008983528860208401528060408401526114a4818401888a611437565b9150506001600160401b03851660608301526114c36080830185611460565b61048e60c0830184611460565b6000602082840312156114e257600080fd5b8151610eb081610eff565b6000610d7d3683611265565b600181811c9082168061150d57607f821691505b60208210810361152d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561157957600081815260208120601f850160051c8101602086101561155a5750805b601f850160051c820191505b81811015610c6157828155600101611566565b505050565b81516001600160401b0381111561159757611597610f14565b6115ab816115a584546114f9565b84611533565b602080601f8311600181146115e057600084156115c85750858301515b600019600386901b1c1916600185901b178555610c61565b600085815260208120601f198616915b8281101561160f578886015182559484019460019091019084016115f0565b508582101561162d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808335601e1984360301811261165457600080fd5b8301803591506001600160401b0382111561166e57600080fd5b602001915036819003821315610ef857600080fd5b6000808585111561169357600080fd5b838611156116a057600080fd5b5050820193919092039150565b6bffffffffffffffffffffffff1981358181169160148510156116da5780818660140360031b1b83161692505b505092915050565b80151581146104ab57600080fd5b60006040823603121561170257600080fd5b61170a610f2a565b8235611715816116e2565b815260208301356001600160401b0381111561173057600080fd5b61173c3682860161120f565b60208301525092915050565b8481526001600160a01b03841660208201526060604082018190526000906111c59083018486611437565b6000602080838503121561178657600080fd5b82516001600160401b038082111561179d57600080fd5b90840190604082870312156117b157600080fd5b6117b9610f2a565b82516117c4816116e2565b815282840151828111156117d757600080fd5b80840193505086601f8401126117ec57600080fd5b825191506117fc61122e836111e8565b828152878584860101111561181057600080fd5b61181f838683018787016110ea565b938101939093525090949350505050565b60006bffffffffffffffffffffffff19808760601b168352808660601b166014840152506361636b2d60e01b60288301528284602c8401375060009101602c019081529392505050565b85815284602082015260806040820152600061189a608083018587611437565b90506001600160401b0383166060830152969550505050505056fea26469706673582212200a7e66388e0e1341dba2b816efe089ee0c6c1ce8c4a98b8e4b8a70d9bc8bce9a64736f6c634300080f0033";

type EarthConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EarthConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Earth__factory extends ContractFactory {
  constructor(...args: EarthConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _middleware: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_middleware, overrides || {});
  }
  override deploy(
    _middleware: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_middleware, overrides || {}) as Promise<
      Earth & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Earth__factory {
    return super.connect(runner) as Earth__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EarthInterface {
    return new Interface(_abi) as EarthInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Earth {
    return new Contract(address, _abi, runner) as unknown as Earth;
  }
}
