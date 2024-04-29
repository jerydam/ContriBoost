"use client";

import React from "react";
import { useAccount, useReadContract } from "wagmi";
import { factoryABI, factoryAddress } from "../utils/contractAddresses&ABIs";
import ParticularSystem from "../components/DeployedSystems/components/particularSystem";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Systems = () => {
  const //
    //
    { address, status } = useAccount(),
    { data } = useReadContract({
      abi: factoryABI,
      address: factoryAddress,
      functionName: "getSystemsByCreator",
      args: [address as `0x${string}`],
    }),
    user = useAccount();
  //
  return (
    <div className="flex flex-col items-center justify-center">
      {status == "connected" ? (
        <>
          Returns the list of systems deployed by a specific creator{" "}
          {data?.map((system, index) => {
            return (
              <ParticularSystem
                key={index + 2}
                address={system.systemAddress}
                index={index}
                joined={false}
              />
            );
          })}
        </>
      ) : (
        <div className=" w-full h-full flex items-center justify-center">
          <ConnectButton label="Please Connect Your Wallet" />
        </div>
      )}
    </div>
  );
};

export default Systems;
