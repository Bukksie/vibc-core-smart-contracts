/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type UniversalPacketStruct = {
  srcPortAddr: BytesLike;
  mwBitmap: BigNumberish;
  destPortAddr: BytesLike;
  appData: BytesLike;
};

export type UniversalPacketStructOutput = [
  srcPortAddr: string,
  mwBitmap: bigint,
  destPortAddr: string,
  appData: string
] & {
  srcPortAddr: string;
  mwBitmap: bigint;
  destPortAddr: string;
  appData: string;
};

export type AckPacketStruct = { success: boolean; data: BytesLike };

export type AckPacketStructOutput = [success: boolean, data: string] & {
  success: boolean;
  data: string;
};

export interface EarthInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ackPackets"
      | "authorizeChannel"
      | "authorizeMiddleware"
      | "authorizedChannelIds"
      | "authorizedMws"
      | "generateAckPacket"
      | "greet"
      | "greetWithFee"
      | "mw"
      | "onRecvUniversalPacket"
      | "onTimeoutUniversalPacket"
      | "onUniversalAcknowledgement"
      | "owner"
      | "recvedPackets"
      | "renounceOwnership"
      | "setDefaultMw"
      | "timeoutPackets"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;

  encodeFunctionData(
    functionFragment: "ackPackets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizeChannel",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizeMiddleware",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedChannelIds",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedMws",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "generateAckPacket",
    values: [BytesLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "greet",
    values: [AddressLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "greetWithFee",
    values: [
      AddressLike,
      BytesLike,
      BytesLike,
      BigNumberish,
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(functionFragment: "mw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onRecvUniversalPacket",
    values: [BytesLike, UniversalPacketStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "onTimeoutUniversalPacket",
    values: [BytesLike, UniversalPacketStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "onUniversalAcknowledgement",
    values: [BytesLike, UniversalPacketStruct, AckPacketStruct]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recvedPackets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultMw",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "timeoutPackets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "ackPackets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authorizeChannel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizeMiddleware",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedChannelIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedMws",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateAckPacket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "greet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "greetWithFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onRecvUniversalPacket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onTimeoutUniversalPacket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onUniversalAcknowledgement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recvedPackets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultMw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeoutPackets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Earth extends BaseContract {
  connect(runner?: ContractRunner | null): Earth;
  waitForDeployment(): Promise<this>;

  interface: EarthInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ackPackets: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, UniversalPacketStructOutput, AckPacketStructOutput] & {
        channelId: string;
        packet: UniversalPacketStructOutput;
        ack: AckPacketStructOutput;
      }
    ],
    "view"
  >;

  authorizeChannel: TypedContractMethod<
    [channelId: BytesLike],
    [void],
    "nonpayable"
  >;

  authorizeMiddleware: TypedContractMethod<
    [middleware: AddressLike],
    [void],
    "nonpayable"
  >;

  authorizedChannelIds: TypedContractMethod<
    [arg0: BytesLike],
    [boolean],
    "view"
  >;

  authorizedMws: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  generateAckPacket: TypedContractMethod<
    [arg0: BytesLike, srcPortAddr: AddressLike, appData: BytesLike],
    [AckPacketStructOutput],
    "view"
  >;

  greet: TypedContractMethod<
    [
      destPortAddr: AddressLike,
      channelId: BytesLike,
      message: BytesLike,
      timeoutTimestamp: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  greetWithFee: TypedContractMethod<
    [
      destPortAddr: AddressLike,
      channelId: BytesLike,
      message: BytesLike,
      timeoutTimestamp: BigNumberish,
      gasLimits: [BigNumberish, BigNumberish],
      gasPrices: [BigNumberish, BigNumberish]
    ],
    [bigint],
    "payable"
  >;

  mw: TypedContractMethod<[], [string], "view">;

  onRecvUniversalPacket: TypedContractMethod<
    [channelId: BytesLike, packet: UniversalPacketStruct],
    [AckPacketStructOutput],
    "nonpayable"
  >;

  onTimeoutUniversalPacket: TypedContractMethod<
    [channelId: BytesLike, packet: UniversalPacketStruct],
    [void],
    "nonpayable"
  >;

  onUniversalAcknowledgement: TypedContractMethod<
    [channelId: BytesLike, packet: UniversalPacketStruct, ack: AckPacketStruct],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  recvedPackets: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, UniversalPacketStructOutput] & {
        channelId: string;
        packet: UniversalPacketStructOutput;
      }
    ],
    "view"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setDefaultMw: TypedContractMethod<
    [_middleware: AddressLike],
    [void],
    "nonpayable"
  >;

  timeoutPackets: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, UniversalPacketStructOutput] & {
        channelId: string;
        packet: UniversalPacketStructOutput;
      }
    ],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ackPackets"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, UniversalPacketStructOutput, AckPacketStructOutput] & {
        channelId: string;
        packet: UniversalPacketStructOutput;
        ack: AckPacketStructOutput;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "authorizeChannel"
  ): TypedContractMethod<[channelId: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "authorizeMiddleware"
  ): TypedContractMethod<[middleware: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "authorizedChannelIds"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "authorizedMws"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "generateAckPacket"
  ): TypedContractMethod<
    [arg0: BytesLike, srcPortAddr: AddressLike, appData: BytesLike],
    [AckPacketStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "greet"
  ): TypedContractMethod<
    [
      destPortAddr: AddressLike,
      channelId: BytesLike,
      message: BytesLike,
      timeoutTimestamp: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "greetWithFee"
  ): TypedContractMethod<
    [
      destPortAddr: AddressLike,
      channelId: BytesLike,
      message: BytesLike,
      timeoutTimestamp: BigNumberish,
      gasLimits: [BigNumberish, BigNumberish],
      gasPrices: [BigNumberish, BigNumberish]
    ],
    [bigint],
    "payable"
  >;
  getFunction(nameOrSignature: "mw"): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "onRecvUniversalPacket"
  ): TypedContractMethod<
    [channelId: BytesLike, packet: UniversalPacketStruct],
    [AckPacketStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onTimeoutUniversalPacket"
  ): TypedContractMethod<
    [channelId: BytesLike, packet: UniversalPacketStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onUniversalAcknowledgement"
  ): TypedContractMethod<
    [channelId: BytesLike, packet: UniversalPacketStruct, ack: AckPacketStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "recvedPackets"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, UniversalPacketStructOutput] & {
        channelId: string;
        packet: UniversalPacketStructOutput;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setDefaultMw"
  ): TypedContractMethod<[_middleware: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "timeoutPackets"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, UniversalPacketStructOutput] & {
        channelId: string;
        packet: UniversalPacketStructOutput;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
