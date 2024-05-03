"use client";

import React from "react";
import ConnectWallet from "./connectWallet";
import Link from "next/link";
import Image from "next/image";
import { SidebarClose } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const //
    { push } = useRouter();
  return (
    <div className="flex relative  items-center bg-gray-300 p-4 ">
      <div className="flex  items-center ">
        <Link
          className="h-16pl-6"
          href={"/"}
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            status == "disconnected" ? push("/") : push("/dash");
          }}
        >
          <Image
            src={"/img/LOGO.png"}
            alt={"logo"}
            width={150}
            height={500}
            className=" transition-all active:scale-95 "
          />
        </Link>
      </div>
      <ConnectWallet />
    </div>
  );
};

export default Header;
