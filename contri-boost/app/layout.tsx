import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./providers";
import SideBar from "./components/sideBar/sideBar";
import Header from "./components/Header";
import ConnectWallet from "./components/connectWallet";

export const metadata: Metadata = {
  title: "ContriBoost",
  description:
    " This system is a digital Contribution system where everyone Come together to contribute something valuable to share.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "bg-gray-50 overflow-hidden"}>
        <Providers>
          {/* sideBar */}
          <section className="flex h-screen">
            <div className="">
              <SideBar />
            </div>
            <div className="w-full">
              <div className="h-16 bg-gray-300 relative flex items-center">
                <ConnectWallet />
              </div>
              <div className="w-full  h-full overflow-y-auto mt-4  p-4">
                {children}
                <div className="h-36"></div>
              </div>
            </div>
          </section>
        </Providers>
      </body>
    </html>
  );
}
