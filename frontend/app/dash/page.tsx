"use client";

import React, { useEffect } from "react";
import DeployedSystems from "../components/DeployedSystems/DeployedSystems";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const //
    { push } = useRouter(),
    { status } = useAccount();
  //
  useEffect(() => {
    status == "disconnected"
      ? setTimeout(() => {
          push("/");
        }, 500)
      : null;
  }, [status]);

  return (
    <div>
      <DeployedSystems createdByUser={false} joined={true}></DeployedSystems>
    </div>
  );
};

export default Dashboard;
