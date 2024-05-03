"use client";

import { CrossIcon, CrosshairIcon, SidebarClose } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useAccount } from "wagmi";
SidebarClose;
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
    <div
      id="sidebar"
      className=" absolute transition-all w-96 shadow-2xl h-screen -left-full md:relative md:left-0 z-40"
    >
      {/* Header */}
      <div className="absolute left-0 top-0 h-screen w-full backdrop-blur-md  -z-10 "></div>
      <div className="relative">
        <div
          className="ml-4 absolute right-0 text-gray-500 inline-block md:hidden"
          onMouseUp={() => {
            const sidebar = document.getElementById("sidebar");
            // @ts-ignore
            sidebar.style.position = "absolute";
            // @ts-ignore
            sidebar.style.left = "-100%";
          }}
        >
          <SidebarClose />
        </div>
      </div>
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
