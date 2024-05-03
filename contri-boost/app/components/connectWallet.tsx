"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MenuIcon } from "lucide-react";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";

const ConnectWallet = () => {
  return (
    <div className="absolute right-6 flex items-center">
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
      <div
        className="ml-2 inline-block md:hidden "
        onMouseOver={() => {
          // absolute -left-full
          const sidebar = document.getElementById("sidebar");
          // @ts-ignore
          sidebar.style.position = "absolute";
          // @ts-ignore
          sidebar.style.left = "0";
        }}
      >
        <MenuIcon />
      </div>
    </div>
  );
};

export default ConnectWallet;
