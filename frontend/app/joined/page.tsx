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

const Joined = () => {
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
        <div className="flex flex-col justify-center items-center">
          {getDeployedSystems.data?.map((system, index) => {
            return <ReturnParticipant systems={system} />;
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
    <div>
      {data?.map((participant, index) => {
        return (
          <div>
            {participant == address ? (
              <div>
                <ParticularSystem
                  address={systems}
                  index={index}
                  joined={participant == address}
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Joined;
