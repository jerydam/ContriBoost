"use client";

import React from "react";
import { useAccount, useReadContract } from "wagmi";
import {
  Contribution_SystemABI,
  factoryABI,
  factoryAddress,
} from "../utils/contractAddresses&ABIs";
import ParticularSystem from "../components/DeployedSystems/components/particularSystem";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Joined from "../components/Joined";

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
    systems = useReadContract({
      abi: factoryABI,
      address: factoryAddress,
      functionName: "getDeployedSystems",
      args: [],
    }),
    user = useAccount();
  //
  return (
    <div className="flex flex-col items-center justify-center">
      Returns the list of systems deployed by a specific creator{" "}
      {status == "connected" ? (
        <div className="flex flex-wrap">
          {data?.map((system, index) => {
            return (
              <div key={index + "1"} className="border-2 m-2 ">
                <div key={index}>
                  <ParticularSystem
                    key={index + 2}
                    address={system.systemAddress}
                    index={index}
                  />
                </div>
                <div className="">
                  <Joined sysAddress={system.systemAddress} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className=" w-full h-full flex items-center justify-center">
          <ConnectButton label="Please Connect Your Wallet" />
        </div>
      )}
    </div>
  );
};

export default Systems;
