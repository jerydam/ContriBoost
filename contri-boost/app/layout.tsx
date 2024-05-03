import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./providers";
import SideBar from "./components/sideBar/sideBar";
import Header from "./components/Header";

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
          <div className="flex flex-col h-screen">
            <Header />
            <div className="w-full flex">
              <SideBar />
              <div className="w-full  overflow-y-scroll h-screen mt-4  p-4">
                {children}
                <div className="h-56"></div>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
