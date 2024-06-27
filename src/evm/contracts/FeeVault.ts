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

export interface FeeVaultInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "depositOpenChannelFee"
      | "depositSendPacketFee"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
      | "withdrawFeesToOwner"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OpenChannelFeeDeposited"
      | "OwnershipTransferred"
      | "SendPacketFeeDeposited"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "depositOpenChannelFee",
    values: [AddressLike, string, BigNumberish, string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositSendPacketFee",
    values: [
      BytesLike,
      BigNumberish,
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFeesToOwner",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "depositOpenChannelFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositSendPacketFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFeesToOwner",
    data: BytesLike
  ): Result;
}

export namespace OpenChannelFeeDepositedEvent {
  export type InputTuple = [
    sourceAddress: AddressLike,
    version: string,
    ordering: BigNumberish,
    connectionHops: string[],
    counterpartyPortId: string,
    feeAmount: BigNumberish
  ];
  export type OutputTuple = [
    sourceAddress: string,
    version: string,
    ordering: bigint,
    connectionHops: string[],
    counterpartyPortId: string,
    feeAmount: bigint
  ];
  export interface OutputObject {
    sourceAddress: string;
    version: string;
    ordering: bigint;
    connectionHops: string[];
    counterpartyPortId: string;
    feeAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace SendPacketFeeDepositedEvent {
  export type InputTuple = [
    channelId: BytesLike,
    sequence: BigNumberish,
    gasLimits: [BigNumberish, BigNumberish],
    gasPrices: [BigNumberish, BigNumberish]
  ];
  export type OutputTuple = [
    channelId: string,
    sequence: bigint,
    gasLimits: [bigint, bigint],
    gasPrices: [bigint, bigint]
  ];
  export interface OutputObject {
    channelId: string;
    sequence: bigint;
    gasLimits: [bigint, bigint];
    gasPrices: [bigint, bigint];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface FeeVault extends BaseContract {
  connect(runner?: ContractRunner | null): FeeVault;
  waitForDeployment(): Promise<this>;

  interface: FeeVaultInterface;

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

  depositOpenChannelFee: TypedContractMethod<
    [
      src: AddressLike,
      version: string,
      ordering: BigNumberish,
      connectionHops: string[],
      counterpartyPortId: string
    ],
    [void],
    "payable"
  >;

  depositSendPacketFee: TypedContractMethod<
    [
      channelId: BytesLike,
      sequence: BigNumberish,
      gasLimits: [BigNumberish, BigNumberish],
      gasPrices: [BigNumberish, BigNumberish]
    ],
    [void],
    "payable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawFeesToOwner: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "depositOpenChannelFee"
  ): TypedContractMethod<
    [
      src: AddressLike,
      version: string,
      ordering: BigNumberish,
      connectionHops: string[],
      counterpartyPortId: string
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "depositSendPacketFee"
  ): TypedContractMethod<
    [
      channelId: BytesLike,
      sequence: BigNumberish,
      gasLimits: [BigNumberish, BigNumberish],
      gasPrices: [BigNumberish, BigNumberish]
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawFeesToOwner"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "OpenChannelFeeDeposited"
  ): TypedContractEvent<
    OpenChannelFeeDepositedEvent.InputTuple,
    OpenChannelFeeDepositedEvent.OutputTuple,
    OpenChannelFeeDepositedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "SendPacketFeeDeposited"
  ): TypedContractEvent<
    SendPacketFeeDepositedEvent.InputTuple,
    SendPacketFeeDepositedEvent.OutputTuple,
    SendPacketFeeDepositedEvent.OutputObject
  >;

  filters: {
    "OpenChannelFeeDeposited(address,string,uint8,string[],string,uint256)": TypedContractEvent<
      OpenChannelFeeDepositedEvent.InputTuple,
      OpenChannelFeeDepositedEvent.OutputTuple,
      OpenChannelFeeDepositedEvent.OutputObject
    >;
    OpenChannelFeeDeposited: TypedContractEvent<
      OpenChannelFeeDepositedEvent.InputTuple,
      OpenChannelFeeDepositedEvent.OutputTuple,
      OpenChannelFeeDepositedEvent.OutputObject
    >;

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

    "SendPacketFeeDeposited(bytes32,uint64,uint256[2],uint256[2])": TypedContractEvent<
      SendPacketFeeDepositedEvent.InputTuple,
      SendPacketFeeDepositedEvent.OutputTuple,
      SendPacketFeeDepositedEvent.OutputObject
    >;
    SendPacketFeeDeposited: TypedContractEvent<
      SendPacketFeeDepositedEvent.InputTuple,
      SendPacketFeeDepositedEvent.OutputTuple,
      SendPacketFeeDepositedEvent.OutputObject
    >;
  };
}
