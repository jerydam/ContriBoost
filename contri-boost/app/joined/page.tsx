"use client";

import React, { useEffect } from "react";
import DeployedSystems from "../components/DeployedSystems/DeployedSystems";
import { useAccount, useReadContract } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Contribution_SystemABI,
  factoryABI,
  factoryAddress,
} from "../utils/contractAddresses&ABIs";
import ParticularSystem from "../components/DeployedSystems/components/particularSystem";
import Joined from "../components/Joined";

const Join = () => {
  const //
    { status } = useAccount(),
    getDeployedSystems = useReadContract({
      abi: factoryABI,
      address: factoryAddress,
      functionName: "getDeployedSystems",
    });
  return (
    <>
      {status == "connected" ? (
        <div className="flex flex-wrap justify-center items-center">
          {getDeployedSystems.data?.map((system, index) => {
            return <ReturnParticipant key={index} systems={system} />;
          })}
        </div>
      ) : (
        <div className=" w-full h-full flex items-center justify-center">
          <ConnectButton label="Please Connect Your Wallet" />
        </div>
      )}
    </>
  );
};

interface ReturnParticipantProps {
  systems: `0x${string}`;
}

const ReturnParticipant = ({ systems }: ReturnParticipantProps) => {
  const //
    { address } = useAccount(),
    //
    { data } = useReadContract({
      abi: Contribution_SystemABI,
      address: systems,
      functionName: "getAllParticipants",
    });
  return (
    <div className="border-2 m-2">
      {data?.map((participant, index) => {
        return (
          <div key={participant}>
            {participant == address ? (
              <div>
                <ParticularSystem address={systems} index={index} />
                <Joined sysAddress={systems} />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Join;
