"use client";

import React, { useEffect, useState } from "react";
import DeployedSystems from "../components/DeployedSystems/DeployedSystems";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { useRouter } from "next/navigation";
import {
  Contribution_SystemABI,
  factoryABI,
  factoryAddress,
} from "../utils/contractAddresses&ABIs";
import ParticularSystem from "../components/DeployedSystems/components/particularSystem";
import Joined from "../components/Joined";

Contribution_SystemABI;
const Dashboard = () => {
  const //
    //
    [joined, setJoined] = useState(Boolean),
    //
    router = useRouter(),
    { status, address } = useAccount(),
    //
    { writeContractAsync } = useWriteContract(),
    { data } = useReadContract({
      abi: factoryABI,
      address: factoryAddress,
      functionName: "getDeployedSystems",
      args: [],
    });
  //
  useEffect(() => {
    status == "disconnected"
      ? setTimeout(() => {
          router.push("/");
        }, 500)
      : null;
  }, [status]);

  return (
    <div className="w-full">
      <div> Total of {data?.length} Systems</div>
      <div className=" flex flex-wrap  justify-center items-center">
        <div>
          {data?.toReversed().map((systemAddress, index) => {
            return (
              <>
                <div className="relative border-2 w-96 p-2 m-2">
                  <ParticularSystem address={systemAddress} index={index} />
                  <div className="">
                    <Joined sysAddress={systemAddress} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
