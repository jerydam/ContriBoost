import { Contribution_SystemABI } from "@/app/utils/contractAddresses&ABIs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  useAccount,
  useBalance,
  useReadContract,
  useWatchContractEvent,
  useWriteContract,
} from "wagmi";

interface ParticularSystemProps {
  address: `0x${string}` | undefined;
  index: number;
}

const ParticularSystem = ({ address, index }: ParticularSystemProps) => {
  const //
    user = useAccount(),
    //
    contributionAmount = useReadContract({
      abi: Contribution_SystemABI,
      address: address,
      functionName: "contributionAmount",
      args: [],
    }),
    name = useReadContract({
      abi: Contribution_SystemABI,
      address: address,
      functionName: "name",
      args: [],
    }),
    currentSegment = useReadContract({
      abi: Contribution_SystemABI,
      address: address,
      functionName: "currentSegment",
      args: [],
    }),
    dayRange = useReadContract({
      abi: Contribution_SystemABI,
      address: address,
      functionName: "dayRange",
      args: [],
    }),
    expectedNumber = useReadContract({
      abi: Contribution_SystemABI,
      address: address,
      functionName: "expectedNumber",
      args: [],
    }),
    balance = useBalance({
      address: address,
    }),
    getAllParticipants = useReadContract({
      abi: Contribution_SystemABI,
      address: address,
      functionName: "getAllParticipants",
    }),
    //
    router = useRouter(),
    //
    { writeContractAsync, failureReason, status } = useWriteContract();

  useEffect(() => {
    failureReason?.cause != undefined ? alert(failureReason?.cause) : null;
  }, [failureReason?.cause]);

  useEffect(() => {
    status == "success"
      ? setTimeout(() => {
          router.refresh();
        }, 2000)
      : null;
  }, [status]);

  //
  /* useWatchContractEvent({
    abi: Contribution_SystemABI,
    address: address,
    eventName: "",
  }); */
  //

  return (
    <div className=" ">
      <div className="">
        <div className="bg-gray-300 p-2 text-center">
          {name.data?.toLocaleUpperCase()}
        </div>
        <div>
          contributionAmount: {Number(contributionAmount.data) / 1e18} ETH
        </div>
        <div>currentSegment: {Number(currentSegment.data)}</div>
        <div>dayRange: {Number(dayRange.data)}</div>
        <div>expectedNumber: {Number(expectedNumber.data)}</div>
        <div className="flex items-center *:m-2">
          getAllParticipants:{" "}
          <div className="flex flex-wrap " key={"cr"}>
            {getAllParticipants.data?.map((participant, index) => {
              return (
                <div className="mx-2 p-1 border-2" key={index}>
                  {participant.replace(
                    participant.slice(3, participant.length - 2),
                    "..."
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          Total Contribution: <b>{balance.data?.formatted} ETH</b>
        </div>
      </div>
    </div>
  );
};

export default ParticularSystem;
