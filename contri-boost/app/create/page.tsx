"use client";

import React, { useEffect, useState } from "react";
import { useAccount, useWatchContractEvent, useWriteContract } from "wagmi";

import { factoryABI, factoryAddress } from "../utils/contractAddresses&ABIs";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Create = () => {
  const //
    [_dayRange, set_dayRange] = useState(0),
    [_expectedNumber, set_expectedNumber] = useState(0),
    [_contributionAmount, set_contributionAmount] = useState(0),
    [_name, set_name] = useState(""),
    //
    { writeContractAsync, status } = useWriteContract(),
    account = useAccount();
  //
  useWatchContractEvent({
    address: factoryAddress,
    abi: factoryABI,
    eventName: "Contribution_SystemCreated",
    onLogs(logs) {
      console.log("System created", logs);
      alert("System created");
    },
  });

  return (
    <>
      {account.status == "connected" ? (
        <div className="flex flex-col items-center justify-center  w-full ">
          Allows creating a new instance of the ContributionSystem contract
          <form action="" className="*:p-4 *:m-1 *:text-black">
            <input
              required
              min={1}
              type="number"
              placeholder="Day Range"
              onChange={(event) => {
                set_dayRange(Number(event.currentTarget.value));
              }}
            />

            <input
              required
              min={1}
              type="number"
              placeholder="Expected Number of Participants"
              onChange={(event) => {
                set_expectedNumber(Number(event.currentTarget.value));
              }}
            />

            <input
              required
              min={1}
              type="number"
              placeholder="Contribution Amount"
              onChange={(event) => {
                set_contributionAmount(Number(event.currentTarget.value));
              }}
            />

            <input
              required
              type="text"
              placeholder="Name of Contribution system"
              onChange={(event) => {
                set_name(event.currentTarget.value);
              }}
            />
          </form>
          <button
            type="submit"
            onClick={() => {
              if (_dayRange != 0 && _expectedNumber != 0) {
                writeContractAsync({
                  abi: factoryABI,
                  address: factoryAddress,
                  functionName: "createContribution_System",
                  args: [
                    BigInt(_dayRange),
                    BigInt(_expectedNumber),
                    BigInt(_contributionAmount),
                    "0xA92CBB9380f9311D876477Fa78Ad1e00f61A858f" as `0x${string}`,
                    _name,
                  ],
                });
              }
            }}
            className="bg-green-600 w-56 p-4 m-1"
          >
            Create Contribution System
          </button>
        </div>
      ) : (
        <div className=" w-full h-full flex items-center justify-center">
          <ConnectButton label="Please Connect Your Wallet" />
        </div>
      )}
    </>
  );
};

export default Create;
