export const factoryAddress = "0x90A77A567C4Ebc6C1fEf3DcBdc61Ff94F1a16eA2";

export const factoryABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newSystem",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "Contribution_SystemCreated",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_dayRange", type: "uint256" },
      { internalType: "uint256", name: "_expectedNumber", type: "uint256" },
      { internalType: "uint256", name: "_contributionAmount", type: "uint256" },
      { internalType: "address", name: "_tokenAddress", type: "address" },
      { internalType: "string", name: "_name", type: "string" },
    ],
    name: "createContribution_System",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "deployedSystems",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_systemAddress", type: "address" },
    ],
    name: "getCreator",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeployedSystems",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_creator", type: "address" }],
    name: "getSystemsByCreator",
    outputs: [
      {
        components: [
          { internalType: "address", name: "systemAddress", type: "address" },
          { internalType: "address", name: "creator", type: "address" },
        ],
        internalType: "struct Factory.SystemInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "systemsByCreator",
    outputs: [
      { internalType: "address", name: "systemAddress", type: "address" },
      { internalType: "address", name: "creator", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

/*********************/
/*********************/
/*********************/

export const Contribution_SystemABI = [
  {
    inputs: [
      { internalType: "uint256", name: "_dayRange", type: "uint256" },
      { internalType: "uint256", name: "_expectedNumber", type: "uint256" },
      { internalType: "uint256", name: "_contributionAmount", type: "uint256" },
      { internalType: "address", name: "_tokenAddress", type: "address" },
      { internalType: "string", name: "_name", type: "string" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "participant",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "segmentNumber",
        type: "uint256",
      },
    ],
    name: "SegmentEnd",
    type: "event",
  },
  {
    inputs: [],
    name: "contributionAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentSegment",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dayRange",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "distributeFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "expectedNumber",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllParticipants",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "host",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "join",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "participantList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "participants",
    outputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "uint256", name: "depositAmount", type: "uint256" },
      { internalType: "uint256", name: "lastDepositTime", type: "uint256" },
      { internalType: "bool", name: "exists", type: "bool" },
      { internalType: "bool", name: "receivedFunds", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

import { http, createConfig } from "@wagmi/core";
import { sepolia, klaytn, klaytnBaobab } from "@wagmi/core/chains";

export const config = createConfig({
  chains: [sepolia, klaytn, klaytnBaobab],
  transports: {
    [sepolia.id]: http(),
    [klaytn.id]: http(),
    [klaytnBaobab.id]: http(),
  },
});
