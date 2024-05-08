import { Contribution_SystemABI } from "@/app/utils/contractAddresses&ABIs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { parseEther } from "viem";
import {
  useAccount,
  useReadContract,
  useWatchContractEvent,
  useWriteContract,
} from "wagmi";

/*********************/
interface JoinedProps {
  sysAddress: `0x${string}`;
}

const Joined = ({ sysAddress }: JoinedProps) => {
  const //
    { address } = useAccount(),
    //
    { data } = useReadContract({
      abi: Contribution_SystemABI,
      address: sysAddress,
      functionName: "getAllParticipants",
    }),
    contributionAmount = useReadContract({
      abi: Contribution_SystemABI,
      address: sysAddress,
      functionName: "contributionAmount",
      args: [],
    }),
    deposited = useReadContract({
      abi: Contribution_SystemABI,
      address: sysAddress,
      functionName: "participants",
      args: [address as `0x${string}`],
    }),
    //
    { writeContractAsync, status } = useWriteContract(),
    { refresh } = useRouter(),
    //
    [_deposited, set_deposited] = useState(0);
  //
  useEffect(() => {
    status == "success"
      ? setTimeout(() => {
          refresh();
        }, 2000)
      : null;
  }, [status]);

  useWatchContractEvent({
    abi: Contribution_SystemABI,
    address: sysAddress,
    eventName: "Deposit",
    onLogs(logs) {
      refresh();
    },
  });

  useWatchContractEvent({
    abi: Contribution_SystemABI,
    address: sysAddress,
    eventName: "ParticipantJoined",
    onLogs(logs) {
      refresh();
    },
  });

  useEffect(() => {
    set_deposited(Number(deposited.data?.[1]));
  }, [deposited.data]);

  return (
    <>
      {data?.includes(address as `0x${string}`) ? (
        Number(deposited.data?.[1]) ? (
          <div className="p-2 text-center bg-blue-500 transition-all text-white cursor-pointer">
            You Deposited: <b>{Number(deposited.data?.[1]) / 1e18} ETH</b>
          </div>
        ) : (
          <div
            className="p-2 text-center bg-blue-400 active:scale-90 transition-all cursor-pointer"
            onClick={() => {
              writeContractAsync({
                abi: Contribution_SystemABI,
                address: sysAddress,
                functionName: "deposit",
                args: [],
                value: parseEther(
                  String(Number(contributionAmount.data) / 1e18)
                ),
              });
            }}
          >
            Contribute <b>{Number(contributionAmount.data) / 1e18} ETH</b>
          </div>
        )
      ) : (
        <div
          className="p-2 text-center bg-green-400 active:scale-90 transition-all cursor-pointer"
          onClick={() => {
            writeContractAsync({
              abi: Contribution_SystemABI,
              address: sysAddress,
              functionName: "join",
              args: [],
            });
          }}
        >
          {status == "pending" ? "...pending..." : "Join"}
        </div>
      )}
    </>
  );
};

export default Joined;
