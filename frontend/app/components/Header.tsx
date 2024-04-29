import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import ConnectWallet from "./connectWallet";

const Header = () => {
  return (
    <div className="flex relative  items-center bg-gray-800 p-4">
      <ConnectWallet />
    </div>
  );
};

export default Header;
