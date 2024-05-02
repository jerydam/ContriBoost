"use client";

import { factoryABI, factoryAddress } from "@/app/utils/contractAddresses&ABIs";
import React, { useState } from "react";
import { useReadContract } from "wagmi";
import ParticularSystem from "./components/particularSystem";

interface DeployedSystemsProps {
  createdByUser: boolean;
  joined: boolean;
}

const DeployedSystems = ({ createdByUser, joined }: DeployedSystemsProps) => {
  const //
    [enableSystem, setEnableSystem] = useState(Boolean),
    //
    { data } = useReadContract({
      abi: factoryABI,
      address: factoryAddress,
      functionName: "getDeployedSystems",
      args: [],
    });
  //

  return (
    <div className="flex flex-wrap items-center justify-center">
      {data?.map((systemAddress, index) => {
        return (
          <div key={index}>
            <ParticularSystem
              address={systemAddress}
              index={index}
              joined={false}
            ></ParticularSystem>
          </div>
        );
      })}
    </div>
  );
};

export default DeployedSystems;
