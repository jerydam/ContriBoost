"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useAccount } from "wagmi";

const paths = [
  {
    name: "Create Contribution System",
    href: "/create",
  },
  {
    name: "Systems You Created",
    href: "/systems",
  },
  {
    name: "Systems You Joined",
    href: "/joined",
  },
  {
    name: "History",
    href: "/history",
  },
];

const SideBar = () => {
  const //
    { status } = useAccount(),
    { push } = useRouter();
  return (
    <div className="w-60 shadow-2xl h-full ">
      {/* Header */}
      <Link
        className="h-16 flex items-center pl-6 bg-gray-300"
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
      {/*  navs*/}
      <nav className="p-4 flex flex-col">
        {paths.map((path, index) => {
          return (
            <Link
              key={index}
              href={path.href}
              className="py-3 hover:bg-blue-300 active:scale-95 transition-all border-b-2 border-blue-500"
            >
              {path.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default SideBar;
