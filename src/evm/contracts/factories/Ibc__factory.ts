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
import type { Ibc, IbcInterface } from "../Ibc";

const _abi = [
  {
    type: "function",
    name: "_hexStrToAddress",
    inputs: [
      {
        name: "hexStr",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "addr",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "ackProofKey",
    inputs: [
      {
        name: "packet",
        type: "tuple",
        internalType: "struct IbcPacket",
        components: [
          {
            name: "src",
            type: "tuple",
            internalType: "struct IbcEndpoint",
            components: [
              {
                name: "portId",
                type: "string",
                internalType: "string",
              },
              {
                name: "channelId",
                type: "bytes32",
                internalType: "bytes32",
              },
            ],
          },
          {
            name: "dest",
            type: "tuple",
            internalType: "struct IbcEndpoint",
            components: [
              {
                name: "portId",
                type: "string",
                internalType: "string",
              },
              {
                name: "channelId",
                type: "bytes32",
                internalType: "bytes32",
              },
            ],
          },
          {
            name: "sequence",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "timeoutHeight",
            type: "tuple",
            internalType: "struct Height",
            components: [
              {
                name: "revision_number",
                type: "uint64",
                internalType: "uint64",
              },
              {
                name: "revision_height",
                type: "uint64",
                internalType: "uint64",
              },
            ],
          },
          {
            name: "timeoutTimestamp",
            type: "uint64",
            internalType: "uint64",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "proofKey",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "ackProofValue",
    inputs: [
      {
        name: "ack",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "proofValue",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "channelProofKey",
    inputs: [
      {
        name: "portId",
        type: "string",
        internalType: "string",
      },
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "proofKey",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "channelProofKeyMemory",
    inputs: [
      {
        name: "portId",
        type: "string",
        internalType: "string",
      },
      {
        name: "channelId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "proofKey",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "channelProofValue",
    inputs: [
      {
        name: "state",
        type: "ChannelState",
        internalType: "enum ChannelState",
      },
      {
        name: "ordering",
        type: "ChannelOrder",
        internalType: "enum ChannelOrder",
      },
      {
        name: "version",
        type: "string",
        internalType: "string",
      },
      {
        name: "connectionHops",
        type: "string[]",
        internalType: "string[]",
      },
      {
        name: "counterpartyPortId",
        type: "string",
        internalType: "string",
      },
      {
        name: "counterpartyChannelId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "proofValue",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "channelProofValueMemory",
    inputs: [
      {
        name: "state",
        type: "ChannelState",
        internalType: "enum ChannelState",
      },
      {
        name: "ordering",
        type: "ChannelOrder",
        internalType: "enum ChannelOrder",
      },
      {
        name: "version",
        type: "string",
        internalType: "string",
      },
      {
        name: "connectionHops",
        type: "string[]",
        internalType: "string[]",
      },
      {
        name: "counterpartyPortId",
        type: "string",
        internalType: "string",
      },
      {
        name: "counterpartyChannelId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "proofValue",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "packetCommitmentProofKey",
    inputs: [
      {
        name: "packet",
        type: "tuple",
        internalType: "struct IbcPacket",
        components: [
          {
            name: "src",
            type: "tuple",
            internalType: "struct IbcEndpoint",
            components: [
              {
                name: "portId",
                type: "string",
                internalType: "string",
              },
              {
                name: "channelId",
                type: "bytes32",
                internalType: "bytes32",
              },
            ],
          },
          {
            name: "dest",
            type: "tuple",
            internalType: "struct IbcEndpoint",
            components: [
              {
                name: "portId",
                type: "string",
                internalType: "string",
              },
              {
                name: "channelId",
                type: "bytes32",
                internalType: "bytes32",
              },
            ],
          },
          {
            name: "sequence",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "timeoutHeight",
            type: "tuple",
            internalType: "struct Height",
            components: [
              {
                name: "revision_number",
                type: "uint64",
                internalType: "uint64",
              },
              {
                name: "revision_height",
                type: "uint64",
                internalType: "uint64",
              },
            ],
          },
          {
            name: "timeoutTimestamp",
            type: "uint64",
            internalType: "uint64",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "proofKey",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "packetCommitmentProofValue",
    inputs: [
      {
        name: "packet",
        type: "tuple",
        internalType: "struct IbcPacket",
        components: [
          {
            name: "src",
            type: "tuple",
            internalType: "struct IbcEndpoint",
            components: [
              {
                name: "portId",
                type: "string",
                internalType: "string",
              },
              {
                name: "channelId",
                type: "bytes32",
                internalType: "bytes32",
              },
            ],
          },
          {
            name: "dest",
            type: "tuple",
            internalType: "struct IbcEndpoint",
            components: [
              {
                name: "portId",
                type: "string",
                internalType: "string",
              },
              {
                name: "channelId",
                type: "bytes32",
                internalType: "bytes32",
              },
            ],
          },
          {
            name: "sequence",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "timeoutHeight",
            type: "tuple",
            internalType: "struct Height",
            components: [
              {
                name: "revision_number",
                type: "uint64",
                internalType: "uint64",
              },
              {
                name: "revision_height",
                type: "uint64",
                internalType: "uint64",
              },
            ],
          },
          {
            name: "timeoutTimestamp",
            type: "uint64",
            internalType: "uint64",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "proofValue",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "parseAckData",
    inputs: [
      {
        name: "ack",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "ackData",
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
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "toStr",
    inputs: [
      {
        name: "b",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "outStr",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "toStr",
    inputs: [
      {
        name: "_number",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "outStr",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "error",
    name: "invalidHexStringLength",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x611e3961003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100be5760003560e01c80636f6547261161007b5780636f6547261461015857806374e970451461016b57806391d6df7d1461018c578063c91f5b3f1461019f578063fb10f0a8146101ca578063fc8f29da146101dd57600080fd5b806311a7a373146100c35780631dcd0305146100ec57806325e0dd0e146100ff578063360b8cd7146101125780634b5728d1146101325780634f9b0fb314610145575b600080fd5b6100d66100d1366004611309565b6101f0565b6040516100e3919061139f565b60405180910390f35b6100d66100fa3660046113b2565b61026c565b6100d661010d366004611431565b610376565b610125610120366004611524565b61046b565b6040516100e39190611565565b6100d6610140366004611309565b6105a8565b6100d661015336600461158c565b6105f1565b6100d661016636600461168c565b610628565b61017e610179366004611524565b61065c565b6040519081526020016100e3565b6100d661019a3660046113b2565b6106b0565b6101b26101ad3660046116d0565b6107c4565b6040516001600160a01b0390911681526020016100e3565b6100d66101d8366004611788565b610971565b61017e6101eb366004611309565b6109f0565b60606101ff6020830183611850565b6102099080611870565b6102226102196020860186611850565b6020013561026c565b61024361023560608701604088016118b6565b6001600160401b03166106b0565b60405160200161025694939291906118df565b6040516020818303038152906040529050919050565b606060005b60208160ff161080156102a55750828160ff16602081106102945761029461195d565b1a60f81b6001600160f81b03191615155b156102bc57806102b481611989565b915050610271565b60008160ff166001600160401b038111156102d9576102d96115d7565b6040519080825280601f01601f191660200182016040528015610303576020820181803683370190505b50905060005b8260ff168160ff16101561036e57848160ff166020811061032c5761032c61195d565b1a60f81b828260ff16815181106103455761034561195d565b60200101906001600160f81b031916908160001a9053508061036681611989565b915050610309565b509392505050565b606061045d6040518060a001604052808c6009811115610398576103986119a8565b60030b81526020018b60028111156103b2576103b26119a8565b60030b8152602001604051806040016040528088888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525060200161040a8761026c565b9052815260200161041b888a6119be565b81526020018a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050915250610b1a565b9a9950505050505050505050565b6040805180820190915260008152606060208201527fcf118b5b37063214cf5ee4e00a21cbc1f63c9adff4e41aef620d6c96005c7a256104af6009600185876119cb565b6040516104bd9291906119f5565b6040518091039020146105335760408051808201909152600081526020810184600a856104eb600282611a05565b926104f8939291906119cb565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509152506105a1565b60408051808201909152600181526020810161059e85600b86610557600282611a05565b92610564939291906119cb565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b8292505050565b90525b9392505050565b60606105b48280611850565b6105be9080611870565b6105cb6102198580611850565b6105de61023560608701604088016118b6565b6040516020016102569493929190611a1c565b606083836105fe8461026c565b60405160200161061093929190611aa0565b60405160208183030381529060405290509392505050565b6060826106348361026c565b604051602001610645929190611af7565b604051602081830303815290604052905092915050565b6000600283836040516106709291906119f5565b602060405180830381855afa15801561068d573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906105a19190611b5a565b6060816000036106d75750506040805180820190915260018152600360fc1b602082015290565b6000825b801561070157816106eb81611b73565b92506106fa9050600a82611ba2565b90506106db565b6000826001600160401b0381111561071b5761071b6115d7565b6040519080825280601f01601f191660200182016040528015610745576020820181803683370190505b509050825b80156107bb5761075b600a87611bb6565b610766906030611bca565b60f81b82610775600184611a05565b815181106107855761078561195d565b60200101906001600160f81b031916908160001a9053506107a7600a87611ba2565b9550806107b381611be2565b91505061074a565b50949350505050565b600081516028146107e8576040516305229b2360e41b815260040160405180910390fd5b60408051601480825281830190925283916000919060208201818036833701905050905060005b601481101561096557600083610826836002611bf9565b815181106108365761083661195d565b016020015160f81c905060008461084e846002611bf9565b610859906001611bca565b815181106108695761086961195d565b016020015160f81c9050604160ff83161080159061088b5750605a8260ff1611155b1561089e5761089b602083611c18565b91505b60418160ff16101580156108b65750605a8160ff1611155b156108c9576108c6602082611c18565b90505b600060618260ff1610156108de5760306108e1565b60575b6108eb9083611c3d565b60618460ff1610156108fe576030610901565b60575b61090b9085611c3d565b610916906010611c60565b6109209190611c18565b90508060f81b8585815181106109385761093861195d565b60200101906001600160f81b031916908160001a905350505050808061095d90611b73565b91505061080f565b50601401519392505050565b60606109e56040518060a00160405280896009811115610993576109936119a8565b60030b81526020018860028111156109ad576109ad6119a8565b60030b815260200160405180604001604052808781526020016109cf8761026c565b9052815260208101879052604001879052610b1a565b979650505050505050565b60006002610a0460e0840160c085016118b6565b610a1460a08501608086016118b6565b610a2460c0860160a087016118b6565b6002610a336060880188611870565b604051610a419291906119f5565b602060405180830381855afa158015610a5e573d6000803e3d6000fd5b5050506040513d601f19601f82011682018060405250810190610a819190611b5a565b6040516001600160c01b031960c095861b8116602083015293851b841660288201529190931b9091166030820152603881019190915260580160408051601f1981840301815290829052610ad491611c89565b602060405180830381855afa158015610af1573d6000803e3d6000fd5b5050506040513d601f19601f82011682018060405250810190610b149190611b5a565b92915050565b60606000610b2783610d37565b6001600160401b03811115610b3e57610b3e6115d7565b6040519080825280601f01601f191660200182016040528015610b68576020820181803683370190505b5090506000610b7984602084610e3d565b82525092915050565b80516060908290600003610ba657604080516000808252602082019092529061036e565b60048151610bb49190611bb6565b15610c055760405162461bcd60e51b815260206004820152601c60248201527f696e76616c696420626173653634206465636f64657220696e70757400000000604482015260640160405180910390fd5b60006040518060a0016040528060808152602001611d84608091399050600060048351610c329190611ba2565b610c3d906003611bf9565b90506000610c4c826020611bca565b6001600160401b03811115610c6357610c636115d7565b6040519080825280601f01601f191660200182016040528015610c8d576020820181803683370190505b5090508351840151603d60ff821603610cba57600183039250613d3d61ffff821603610cba576001830392505b50818152600183018485518101602084015b81831015610d2957600483019250825160ff8082168601511660ff808360081c168701511660061b0160ff808360101c1687015116600c1b60ff808460181c168801511660121b010190508060e81b825250600381019050610ccc565b509298975050505050505050565b6000806000610d498460000151610fc7565b610d54906001611bca565b610d5e9083611bca565b9150610d6d8460200151610fc7565b610d78906001611bca565b610d829083611bca565b9150610d99610d948560400151610ff0565b61103b565b610da4906001611bca565b610dae9083611bca565b9150600090505b836060015151811015610e1257610de984606001518281518110610ddb57610ddb61195d565b60200260200101515161103b565b610df4906001611bca565b610dfe9083611bca565b915080610e0a81611b73565b915050610db5565b610e2084608001515161103b565b610e2b906001611bca565b610e359083611bca565b949350505050565b825160009083908190839060030b15610e8657610e5e600160008488611050565b610e689083611bca565b9150610e7987600001518387611070565b610e839083611bca565b91505b602087015160030b15610ec957610ea1600260008488611050565b610eab9083611bca565b9150610ebc87602001518387611070565b610ec69083611bca565b91505b610ed7600360028488611050565b610ee19083611bca565b9150610ef287604001518387611090565b610efc9083611bca565b9150866060015151600014610f7c575060005b866060015151811015610f7c57610f2a600460028488611050565b610f349083611bca565b9150610f5e87606001518281518110610f4f57610f4f61195d565b60200260200101518387611143565b610f689083611bca565b915080610f7481611b73565b915050610f0f565b60808701515115610fbd57610f95600560028488611050565b610f9f9083611bca565b9150610fb087608001518387611143565b610fba9083611bca565b91505b6109e58383611a05565b6000808260030b1215610fdc5750600a919050565b610b148263ffffffff16611150565b919050565b60008061100183600001515161103b565b61100c906001611bca565b6110169082611bca565b905061102683602001515161103b565b611031906001611bca565b6105a19082611bca565b600061104682611150565b610b149083611bca565b600060088502600785161761106681858561116d565b9695505050505050565b6000836110876001600160401b038216858561116d565b95945050505050565b600082808261109e87610ff0565b6001600160401b038111156110b5576110b56115d7565b6040519080825280601f01601f1916602001820160405280156110df576020820181803683370190505b509050808560006110f28a6020856111b0565b90506110ff81868a61116d565b6111099086611bca565b9450611129611119846020611bca565b6111238785611bca565b8361123f565b6111338186611bca565b94506060935061045d8686611a05565b6000610e358484846112be565b60071c600060015b8215610b145760079290921c91600101611158565b600080828401607f86165b600787901c156111a0578060801782535060079590951c9460019182019101607f8616611178565b8082535050600101949350505050565b82515160009083908190156111f5576111cd600160028387611050565b6111d79082611bca565b90506111e886600001518286611143565b6111f29082611bca565b90505b602086015151156112355761120d6002808387611050565b6112179082611bca565b905061122886602001518286611143565b6112329082611bca565b90505b6110668282611a05565b8060000361124c57505050565b60208111156112855782518252611264602083611bca565b9150611271602084611bca565b925061127e602082611a05565b905061124c565b60006001611294836020611a05565b6112a090610100611d77565b6112aa9190611a05565b935183518516941916939093179091525050565b8251600090816112cf82868661116d565b905060008186018501602088015b848310156112fc57805160001a825360019283019291820191016112dd565b506109e590508183611bca565b60006020828403121561131b57600080fd5b81356001600160401b0381111561133157600080fd5b820160e081850312156105a157600080fd5b60005b8381101561135e578181015183820152602001611346565b8381111561136d576000848401525b50505050565b6000815180845261138b816020860160208601611343565b601f01601f19169290920160200192915050565b6020815260006105a16020830184611373565b6000602082840312156113c457600080fd5b5035919050565b8035600a8110610feb57600080fd5b803560038110610feb57600080fd5b60008083601f8401126113fb57600080fd5b5081356001600160401b0381111561141257600080fd5b60208301915083602082850101111561142a57600080fd5b9250929050565b600080600080600080600080600060c08a8c03121561144f57600080fd5b6114588a6113cb565b985061146660208b016113da565b975060408a01356001600160401b038082111561148257600080fd5b61148e8d838e016113e9565b909950975060608c01359150808211156114a757600080fd5b818c0191508c601f8301126114bb57600080fd5b8135818111156114ca57600080fd5b8d60208260051b85010111156114df57600080fd5b6020830197508096505060808c01359150808211156114fd57600080fd5b5061150a8c828d016113e9565b9a9d999c50979a9699959894979660a00135949350505050565b6000806020838503121561153757600080fd5b82356001600160401b0381111561154d57600080fd5b611559858286016113e9565b90969095509350505050565b6020815281511515602082015260006020830151604080840152610e356060840182611373565b6000806000604084860312156115a157600080fd5b83356001600160401b038111156115b757600080fd5b6115c3868287016113e9565b909790965060209590950135949350505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611615576116156115d7565b604052919050565b600082601f83011261162e57600080fd5b81356001600160401b03811115611647576116476115d7565b61165a601f8201601f19166020016115ed565b81815284602083860101111561166f57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561169f57600080fd5b82356001600160401b038111156116b557600080fd5b6116c18582860161161d565b95602094909401359450505050565b6000602082840312156116e257600080fd5b81356001600160401b038111156116f857600080fd5b610e358482850161161d565b60006001600160401b038084111561171e5761171e6115d7565b8360051b602061172f8183016115ed565b8681529350908401908084018783111561174857600080fd5b855b8381101561177c578035858111156117625760008081fd5b61176e8a828a0161161d565b83525090820190820161174a565b50505050509392505050565b60008060008060008060c087890312156117a157600080fd5b6117aa876113cb565b95506117b8602088016113da565b945060408701356001600160401b03808211156117d457600080fd5b6117e08a838b0161161d565b955060608901359150808211156117f657600080fd5b818901915089601f83011261180a57600080fd5b6118198a833560208501611704565b9450608089013591508082111561182f57600080fd5b5061183c89828a0161161d565b92505060a087013590509295509295509295565b60008235603e1983360301811261186657600080fd5b9190910192915050565b6000808335601e1984360301811261188757600080fd5b8301803591506001600160401b038211156118a157600080fd5b60200191503681900382131561142a57600080fd5b6000602082840312156118c857600080fd5b81356001600160401b03811681146105a157600080fd5b6a61636b732f706f7274732f60a81b81528385600b8301376000848201692f6368616e6e656c732f60b01b600b8201528451611922816015840160208901611343565b8082019150506a2f73657175656e6365732f60a81b6015820152835161194f816020840160208801611343565b016020019695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff810361199f5761199f611973565b60010192915050565b634e487b7160e01b600052602160045260246000fd5b60006105a1368484611704565b600080858511156119db57600080fd5b838611156119e857600080fd5b5050820193919092039150565b8183823760009101908152919050565b600082821015611a1757611a17611973565b500390565b71636f6d6d69746d656e74732f706f7274732f60701b8152838560128301376000848201692f6368616e6e656c732f60b01b60128201528451611a6681601c840160208901611343565b6a2f73657175656e6365732f60a81b601c92909101918201528351611a92816027840160208801611343565b016027019695505050505050565b716368616e6e656c456e64732f706f7274732f60701b8152828460128301376000838201692f6368616e6e656c732f60b01b60128201528351611aea81601c840160208801611343565b01601c0195945050505050565b716368616e6e656c456e64732f706f7274732f60701b815260008351611b24816012850160208801611343565b692f6368616e6e656c732f60b01b6012918401918201528351611b4e81601c840160208801611343565b01601c01949350505050565b600060208284031215611b6c57600080fd5b5051919050565b600060018201611b8557611b85611973565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611bb157611bb1611b8c565b500490565b600082611bc557611bc5611b8c565b500690565b60008219821115611bdd57611bdd611973565b500190565b600081611bf157611bf1611973565b506000190190565b6000816000190483118215151615611c1357611c13611973565b500290565b600060ff821660ff84168060ff03821115611c3557611c35611973565b019392505050565b600060ff821660ff841680821015611c5757611c57611973565b90039392505050565b600060ff821660ff84168160ff0481118215151615611c8157611c81611973565b029392505050565b60008251611866818460208701611343565b600181815b80851115611cd6578160001904821115611cbc57611cbc611973565b80851615611cc957918102915b93841c9390800290611ca0565b509250929050565b600082611ced57506001610b14565b81611cfa57506000610b14565b8160018114611d105760028114611d1a57611d36565b6001915050610b14565b60ff841115611d2b57611d2b611973565b50506001821b610b14565b5060208310610133831016604e8410600b8410161715611d59575081810a610b14565b611d638383611c9b565b8060001904821115611c8157611c81611973565b60006105a18383611cde56fe000000000000000000000000000000000000000000000000000000000000000000000000000000000000003e0000003f3435363738393a3b3c3d00000000000000000102030405060708090a0b0c0d0e0f101112131415161718190000000000001a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132330000000000a2646970667358221220df3a75109b7df12c01c1f5b94c1ed3890be2ecfb6eb1ea1e5aba352712ced74e64736f6c634300080f0033";

type IbcConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IbcConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Ibc__factory extends ContractFactory {
  constructor(...args: IbcConstructorParams) {
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
      Ibc & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Ibc__factory {
    return super.connect(runner) as Ibc__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IbcInterface {
    return new Interface(_abi) as IbcInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Ibc {
    return new Contract(address, _abi, runner) as unknown as Ibc;
  }
}