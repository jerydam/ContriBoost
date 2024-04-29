"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const //
    { status } = useAccount();
  return (
    <div className="flex flex-col items-center justify-center">
      {status == "connected" ? (
        <>
          <div className="flex ">
            <nav className="*:p-2 *:m-1 *:border-b-2 *:border-gray-500">
              <Link href={"/history/systems"}>System you joined</Link>
              <Link href={"/history/deposits"}>Deposits</Link>
              <Link href={"/history/wins"}>wins</Link>
            </nav>
          </div>
          <div className="w-full  h-full overflow-y-auto mt-4  p-4">
            {children}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-96">
          <ConnectButton label="Please Connect Your Wallet" />
        </div>
      )}
    </div>
  );
}
