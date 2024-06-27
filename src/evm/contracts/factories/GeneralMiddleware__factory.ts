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
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  GeneralMiddleware,
  GeneralMiddlewareInterface,
} from "../GeneralMiddleware";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "mwId",
        type: "uint256",
        internalType: "uint256",
      },
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
    name: "MW_ID",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "onRecvMWAck",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "ucPacket",
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
        name: "mwIndex",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "mwAddrs",
        type: "address[]",
        internalType: "address[]",
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
    name: "onRecvMWPacket",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "ucPacket",
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
        name: "mwIndex",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "mwAddrs",
        type: "address[]",
        internalType: "address[]",
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
    name: "onRecvMWTimeout",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "ucPacket",
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
        name: "mwIndex",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "mwAddrs",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "ucPacket",
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
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendMWPacket",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "srcPortAddr",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "destPortAddr",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "srcMwIds",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "appData",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "timeoutTimestamp",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    outputs: [
      {
        name: "sequence",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendUniversalPacket",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
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
      {
        name: "timeoutTimestamp",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    outputs: [
      {
        name: "sequence",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendUniversalPacketWithFee",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
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
    type: "event",
    name: "RecvMWAck",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "srcPortAddr",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "destPortAddr",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "mwId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "appData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "mwData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "ack",
        type: "tuple",
        indexed: false,
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
    anonymous: false,
  },
  {
    type: "event",
    name: "RecvMWPacket",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "srcPortAddr",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "destPortAddr",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "mwId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "appData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "mwData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RecvMWTimeout",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "srcPortAddr",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "destPortAddr",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "mwId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "appData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "mwData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SendMWPacket",
    inputs: [
      {
        name: "channelId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "srcPortAddr",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "destPortAddr",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "mwId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "appData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "timeoutTimestamp",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
      {
        name: "mwData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UCHPacketSent",
    inputs: [
      {
        name: "source",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "destination",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
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
  "0x608060405234801561001057600080fd5b506040516200191138038062001911833981016040819052610031916100d8565b8061003b33610088565b600180546001600160a01b0319166001600160a01b03831617905561007e816001600160a01b03166000908152600260205260409020805460ff19166001179055565b5050600355610115565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100eb57600080fd5b825160208401519092506001600160a01b038116811461010a57600080fd5b809150509250929050565b6117ec80620001256000396000f3fe6080604052600436106101015760003560e01c80635b76158511610095578063a968dc6011610064578063a968dc60146102db578063c1cb44e5146102fb578063c2cfcd731461031f578063ce2ce6461461033f578063f2fde38b1461035f57600080fd5b80635b76158514610247578063715018a6146102745780638da5cb5b14610289578063a742d78c146102bb57600080fd5b80633b90b042116100d15780633b90b042146101cc578063400d9f5d146101ec578063462fdf831461020c578063588152ca1461022757600080fd5b8062e82cef1461010d5780631b67943d1461012f5780631f3a58301461016c5780633a7fbcbd1461018c57600080fd5b3661010857005b600080fd5b34801561011957600080fd5b5061012d610128366004610d2b565b61037f565b005b34801561013b57600080fd5b5061014f61014a366004610daa565b6103b2565b6040516001600160401b0390911681526020015b60405180910390f35b34801561017857600080fd5b5061014f610187366004610e27565b6103cf565b34801561019857600080fd5b506101bc6101a7366004610d2b565b60026020526000908152604090205460ff1681565b6040519015158152602001610163565b3480156101d857600080fd5b5061012d6101e7366004610d2b565b610427565b3480156101f857600080fd5b5061012d610207366004610ea9565b61043b565b61014f61021a366004610f00565b6000979650505050505050565b34801561023357600080fd5b5061012d610242366004611055565b61046f565b34801561025357600080fd5b50610267610262366004610ea9565b6104a4565b60405161016391906111ac565b34801561028057600080fd5b5061012d6104ef565b34801561029557600080fd5b506000546001600160a01b03165b6040516001600160a01b039091168152602001610163565b3480156102c757600080fd5b506001546102a3906001600160a01b031681565b3480156102e757600080fd5b5061012d6102f636600461121f565b610503565b34801561030757600080fd5b5061031160035481565b604051908152602001610163565b34801561032b57600080fd5b5061012d61033a3660046112be565b6106d8565b34801561034b57600080fd5b5061026761035a3660046112be565b6108a6565b34801561036b57600080fd5b5061012d61037a366004610d2b565b610a69565b610387610ae4565b61039081610b3e565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60006103c388888888888888610b62565b98975050505050505050565b60408051338152602081018690526000917f9831d8c66285bfd33de069ced58ad437d6bf08f63446bf06c3713e40b4b7e873910160405180910390a161041b8633876000888888610b62565b90505b95945050505050565b61042f610ae4565b61043881610b3e565b50565b3360009081526002602052604090205460ff1661046b57604051630ddfd93d60e11b815260040160405180910390fd5b5050565b3360009081526002602052604090205460ff1661049f57604051630ddfd93d60e11b815260040160405180910390fd5b505050565b6040805180820190915260008152606060208201523360009081526002602052604090205460ff166104e957604051630ddfd93d60e11b815260040160405180910390fd5b92915050565b6104f7610ae4565b6105016000610c4c565b565b3360009081526002602052604090205460ff1661053357604051630ddfd93d60e11b815260040160405180910390fd5b60035460408601359086359088907f0ad1351cd77bd217ef00c2ab94f17283f9a51d4ebd8d189c151760d8075f01c29061057060608b018b61133b565b60035460405160200161058591815260200190565b60408051601f19818403018152908290526105a4949392918a90611430565b60405180910390a46105b7600183611486565b840361062d576105c78535610c9c565b6001600160a01b031663588152ca8787846040518463ffffffff1660e01b81526004016105f6939291906114d9565b600060405180830381600087803b15801561061057600080fd5b505af1158015610624573d6000803e3d6000fd5b505050506106d0565b828261063a86600161150e565b81811061064957610649611526565b905060200201602081019061065e9190610d2b565b6001600160a01b031663a968dc60878761067988600161150e565b8787876040518763ffffffff1660e01b815260040161069d96959493929190611583565b600060405180830381600087803b1580156106b757600080fd5b505af11580156106cb573d6000803e3d6000fd5b505050505b505050505050565b3360009081526002602052604090205460ff1661070857604051630ddfd93d60e11b815260040160405180910390fd5b60035460408501359085359087907fc2c6119a1960aa25d517e5173005d0d39b4f58db74eda3eb48acda26cac7ca629061074560608a018a61133b565b60035460405160200161075a91815260200190565b60408051601f1981840301815290829052610777949392916115d6565b60405180910390a461078a600182611486565b83036107fe5761079a8435610c9c565b6001600160a01b031663400d9f5d86866040518363ffffffff1660e01b81526004016107c792919061160d565b600060405180830381600087803b1580156107e157600080fd5b505af11580156107f5573d6000803e3d6000fd5b5050505061089f565b818161080b85600161150e565b81811061081a5761081a611526565b905060200201602081019061082f9190610d2b565b6001600160a01b031663c2cfcd73868661084a87600161150e565b86866040518663ffffffff1660e01b815260040161086c959493929190611626565b600060405180830381600087803b15801561088657600080fd5b505af115801561089a573d6000803e3d6000fd5b505050505b5050505050565b6040805180820190915260008152606060208201523360009081526002602052604090205460ff166108eb57604051630ddfd93d60e11b815260040160405180910390fd5b60035460408601359086359088907fdbf4e1c85f2bbbba15b8c4ca75bb0ef2a3e496e986f4fde306aa5942a48ad1809061092860608b018b61133b565b60035460405160200161093d91815260200190565b60408051601f198184030181529082905261095a949392916115d6565b60405180910390a461096d600183611486565b84036109fb576109808560400135610c9c565b6001600160a01b0316635b76158587876040518363ffffffff1660e01b81526004016109ad92919061160d565b6000604051808303816000875af11580156109cc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109f49190810190611658565b905061041e565b8282610a0886600161150e565b818110610a1757610a17611526565b9050602002016020810190610a2c9190610d2b565b6001600160a01b031663ce2ce6468787610a4788600161150e565b87876040518663ffffffff1660e01b81526004016109ad959493929190611626565b610a71610ae4565b6001600160a01b038116610adb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61043881610c4c565b6000546001600160a01b031633146105015760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610ad2565b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b60008587897f7c1d77d7984ba9b37263b84eda35413a5b3911d71bd1f24b60bb43cfcaf539f7600354888888600354604051602001610ba391815260200190565b60408051601f1981840301815290829052610bc19594939291611715565b60405180910390a4600154600354604051631b67943d60e01b81526001600160a01b0390921691631b67943d91610c09918c918c918c918c17908b908b908b90600401611750565b6020604051808303816000875af1158015610c28573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c39190611799565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006104e98260006001600160a01b03821115610d0b5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316044820152663630206269747360c81b6064820152608401610ad2565b5090565b80356001600160a01b0381168114610d2657600080fd5b919050565b600060208284031215610d3d57600080fd5b610d4682610d0f565b9392505050565b60008083601f840112610d5f57600080fd5b5081356001600160401b03811115610d7657600080fd5b602083019150836020828501011115610d8e57600080fd5b9250929050565b6001600160401b038116811461043857600080fd5b600080600080600080600060c0888a031215610dc557600080fd5b8735965060208801359550604088013594506060880135935060808801356001600160401b03811115610df757600080fd5b610e038a828b01610d4d565b90945092505060a0880135610e1781610d95565b8091505092959891949750929550565b600080600080600060808688031215610e3f57600080fd5b853594506020860135935060408601356001600160401b03811115610e6357600080fd5b610e6f88828901610d4d565b9094509250506060860135610e8381610d95565b809150509295509295909350565b600060808284031215610ea357600080fd5b50919050565b60008060408385031215610ebc57600080fd5b8235915060208301356001600160401b03811115610ed957600080fd5b610ee585828601610e91565b9150509250929050565b80604081018310156104e957600080fd5b6000806000806000806000610100888a031215610f1c57600080fd5b873596506020880135955060408801356001600160401b03811115610f4057600080fd5b610f4c8a828b01610d4d565b9096509450506060880135610f6081610d95565b9250610f6f8960808a01610eef565b9150610f7e8960c08a01610eef565b905092959891949750929550565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b0381118282101715610fc457610fc4610f8c565b60405290565b604080519081016001600160401b0381118282101715610fc457610fc4610f8c565b604051601f8201601f191681016001600160401b038111828210171561101457611014610f8c565b604052919050565b60006001600160401b0382111561103557611035610f8c565b50601f01601f191660200190565b600060408284031215610ea357600080fd5b60008060006060848603121561106a57600080fd5b833592506020808501356001600160401b038082111561108957600080fd5b908601906080828903121561109d57600080fd5b6110a5610fa2565b823581528383013584820152604083013560408201526060830135828111156110cd57600080fd5b80840193505088601f8401126110e257600080fd5b82356110f56110f08261101c565b610fec565b8181528a8683870101111561110957600080fd5b818686018783013760009181019095015260608101939093529193506040860135918083111561113857600080fd5b505061114686828701611043565b9150509250925092565b60005b8381101561116b578181015183820152602001611153565b8381111561117a576000848401525b50505050565b60008151808452611198816020860160208601611150565b601f01601f19169290920160200192915050565b60208152815115156020820152600060208301516040808401526111d36060840182611180565b949350505050565b60008083601f8401126111ed57600080fd5b5081356001600160401b0381111561120457600080fd5b6020830191508360208260051b8501011115610d8e57600080fd5b60008060008060008060a0878903121561123857600080fd5b8635955060208701356001600160401b038082111561125657600080fd5b6112628a838b01610e91565b965060408901359550606089013591508082111561127f57600080fd5b61128b8a838b016111db565b909550935060808901359150808211156112a457600080fd5b506112b189828a01611043565b9150509295509295509295565b6000806000806000608086880312156112d657600080fd5b8535945060208601356001600160401b03808211156112f457600080fd5b61130089838a01610e91565b955060408801359450606088013591508082111561131d57600080fd5b5061132a888289016111db565b969995985093965092949392505050565b6000808335601e1984360301811261135257600080fd5b8301803591506001600160401b0382111561136c57600080fd5b602001915036819003821315610d8e57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b801515811461043857600080fd5b6000808335601e198436030181126113cf57600080fd5b83016020810192503590506001600160401b038111156113ee57600080fd5b803603821315610d8e57600080fd5b6000813561140a816113aa565b1515835261141b60208301836113b8565b6040602086015261041e604086018284611381565b85815260806020820152600061144a608083018688611381565b828103604084015261145c8186611180565b905082810360608401526103c381856113fd565b634e487b7160e01b600052601160045260246000fd5b60008282101561149857611498611470565b500390565b80358252602081013560208301526040810135604083015260006114c460608301836113b8565b6080606086015261041e608086018284611381565b8381526060602082015260006114f2606083018561149d565b828103604084015261150481856113fd565b9695505050505050565b6000821982111561152157611521611470565b500190565b634e487b7160e01b600052603260045260246000fd5b8183526000602080850194508260005b85811015611578576001600160a01b0361156583610d0f565b168752958201959082019060010161154c565b509495945050505050565b86815260a06020820152600061159c60a083018861149d565b86604084015282810360608401526115b581868861153c565b905082810360808401526115c981856113fd565b9998505050505050505050565b8481526060602082015260006115f0606083018587611381565b82810360408401526116028185611180565b979650505050505050565b8281526040602082015260006111d3604083018461149d565b85815260806020820152600061163f608083018761149d565b85604084015282810360608401526103c381858761153c565b6000602080838503121561166b57600080fd5b82516001600160401b038082111561168257600080fd5b908401906040828703121561169657600080fd5b61169e610fca565b82516116a9816113aa565b815282840151828111156116bc57600080fd5b80840193505086601f8401126116d157600080fd5b825191506116e16110f08361101c565b82815287858486010111156116f557600080fd5b61170483868301878701611150565b938101939093525090949350505050565b85815260806020820152600061172f608083018688611381565b6001600160401b038516604084015282810360608401526103c38185611180565b87815286602082015285604082015284606082015260c06080820152600061177c60c083018587611381565b90506001600160401b03831660a083015298975050505050505050565b6000602082840312156117ab57600080fd5b8151610d4681610d9556fea264697066735822122044da5feb9be2e84a23f5a49718450fd302eb405f263e8daa860f74dc44bd65cc64736f6c634300080f0033";

type GeneralMiddlewareConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GeneralMiddlewareConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GeneralMiddleware__factory extends ContractFactory {
  constructor(...args: GeneralMiddlewareConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    mwId: BigNumberish,
    _middleware: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(mwId, _middleware, overrides || {});
  }
  override deploy(
    mwId: BigNumberish,
    _middleware: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(mwId, _middleware, overrides || {}) as Promise<
      GeneralMiddleware & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): GeneralMiddleware__factory {
    return super.connect(runner) as GeneralMiddleware__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GeneralMiddlewareInterface {
    return new Interface(_abi) as GeneralMiddlewareInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): GeneralMiddleware {
    return new Contract(address, _abi, runner) as unknown as GeneralMiddleware;
  }
}