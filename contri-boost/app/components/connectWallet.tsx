"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";

const ConnectWallet = () => {
  const //
    { status } = useAccount(),
    { push } = useRouter();
  //
  //
  // useEffect(() => {
  //   status == "disconnected"
  //     ? setTimeout(() => {
  //         push("/");
  //       }, 500)
  //     : null;
  // }, [status]);

  // //
  // useEffect(() => {
  //   status == "connected"
  //     ? window.location.href.slice(window.location.href.lastIndexOf("/")) == "/"
  //       ? push("/dash")
  //       : null
  //     : null;
  // }, [status]);
  return (
    <div className="absolute right-6">
      <ConnectButton
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "avatar",
        }}
        chainStatus="icon"
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
      />
    </div>
  );
};

export default ConnectWallet;
