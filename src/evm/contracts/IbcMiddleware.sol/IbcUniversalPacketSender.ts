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
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface IbcUniversalPacketSenderInterface extends Interface {
  getFunction(
    nameOrSignature: "sendUniversalPacket" | "sendUniversalPacketWithFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "sendUniversalPacket",
    values: [BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendUniversalPacketWithFee",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish,
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "sendUniversalPacket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendUniversalPacketWithFee",
    data: BytesLike
  ): Result;
}

export interface IbcUniversalPacketSender extends BaseContract {
  connect(runner?: ContractRunner | null): IbcUniversalPacketSender;
  waitForDeployment(): Promise<this>;

  interface: IbcUniversalPacketSenderInterface;

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

  sendUniversalPacket: TypedContractMethod<
    [
      channelId: BytesLike,
      destPortAddr: BytesLike,
      appData: BytesLike,
      timeoutTimestamp: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  sendUniversalPacketWithFee: TypedContractMethod<
    [
      channelId: BytesLike,
      destPortAddr: BytesLike,
      appData: BytesLike,
      timeoutTimestamp: BigNumberish,
      gasLimits: [BigNumberish, BigNumberish],
      gasPrices: [BigNumberish, BigNumberish]
    ],
    [bigint],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "sendUniversalPacket"
  ): TypedContractMethod<
    [
      channelId: BytesLike,
      destPortAddr: BytesLike,
      appData: BytesLike,
      timeoutTimestamp: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sendUniversalPacketWithFee"
  ): TypedContractMethod<
    [
      channelId: BytesLike,
      destPortAddr: BytesLike,
      appData: BytesLike,
      timeoutTimestamp: BigNumberish,
      gasLimits: [BigNumberish, BigNumberish],
      gasPrices: [BigNumberish, BigNumberish]
    ],
    [bigint],
    "payable"
  >;

  filters: {};
}