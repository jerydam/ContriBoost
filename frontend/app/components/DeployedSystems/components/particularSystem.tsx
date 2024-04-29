import { Contribution_SystemABI } from "@/app/utils/contractAddresses&ABIs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  useReadContract,
  useWatchContractEvent,
  useWriteContract,
} from "wagmi";

interface ParticularSystemProps {
  address: `0x${string}`;
  index: number;
  joined: boolean;
}

const ParticularSystem = ({
  address,
  index,
  joined,
}: ParticularSystemProps) => {
  const //
    //a
    contributionAmount = useReadContract({
      abi: Contribution_SystemABI,
      address: address,
      functionName: "contributionAmount",
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
    host = useReadContract({
      abi: Contribution_SystemABI,
      address: address,
      functionName: "host",
      args: [],
    }),
    getAllParticipants = useReadContract({
      abi: Contribution_SystemABI,
      address: address,
      functionName: "getAllParticipants",
    }),
    //
    { refresh } = useRouter(),
    //
    { writeContractAsync, failureReason, status } = useWriteContract();

  useEffect(() => {
    failureReason?.cause != undefined ? alert(failureReason?.cause) : null;
  }, [failureReason?.cause]);

  useEffect(() => {
    status == "success"
      ? setTimeout(() => {
          refresh();
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
    <div className="border-2 p-2 m-2 relative">
      <div>
        <div>contributionAmount: {Number(contributionAmount.data)}</div>
        <div>currentSegment: {Number(currentSegment.data)}</div>
        <div>dayRange: {Number(dayRange.data)}</div>
        <div>expectedNumber: {Number(expectedNumber.data)}</div>
        <div>host: {host.data}</div>
        <div className="flex items-center *:m-2">
          getAllParticipants:{" "}
          <div className="flex flex-wrap" key={"cr"}>
            {getAllParticipants.data?.map((participant, index) => {
              return (
                <div className="mx-2 p-1 border-2" key={index}>
                  {participant.replace(
                    participant.slice(4, participant.length - 4),
                    "..."
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {joined ? (
          <button
            className="bg-blue-500 px-3 absolute right-0 bottom-0 cursor-pointer"
            onClick={() => {}}
          >
            Contribute
          </button>
        ) : (
          <button
            className="bg-green-500 px-3 absolute right-0 bottom-0 cursor-pointer"
            onClick={() => {
              writeContractAsync({
                abi: Contribution_SystemABI,
                address: address,
                functionName: "join",
                args: [],
              });
            }}
          >
            join
          </button>
        )}
      </div>
    </div>
  );
};

export default ParticularSystem;
