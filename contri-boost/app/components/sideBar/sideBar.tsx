"use client";

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
        className="h-16 flex items-center pl-6 bg-gray-900"
        href={"/"}
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          status == "disconnected" ? push("/") : push("/dash");
        }}
      >
        ContrBoost 🚀
      </Link>
      {/*  navs*/}
      <nav className="p-4 flex flex-col">
        {paths.map((path, index) => {
          return (
            <Link
              key={index}
              href={path.href}
              className="py-3 border-b-2 border-gray-500"
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
