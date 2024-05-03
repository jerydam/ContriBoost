import { Contribution_SystemABI } from "@/app/utils/contractAddresses&ABIs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";

/*********************/
interface JoinedProps {
  abi: typeof Contribution_SystemABI;
  sysAddress: `0x${string}`;
}

const Joined = ({ abi, sysAddress }: JoinedProps) => {
  const //
    { data } = useReadContract({
      abi: abi,
      address: sysAddress,
      functionName: "getAllParticipants",
    }),
    //
    { writeContractAsync, status } = useWriteContract(),
    { address } = useAccount(),
    //
    { refresh } = useRouter();
  //
  useEffect(() => {
    status == "success"
      ? setTimeout(() => {
          refresh();
        }, 1500)
      : null;
  }, [status]);

  return (
    <>
      {data?.includes(address as `0x${string}`) ? (
        <div className="p-2 bg-blue-400 active:scale-90 transition-all cursor-pointer">
          Contribute
        </div>
      ) : (
        <div
          className="p-2 bg-green-400 active:scale-90 transition-all cursor-pointer"
          onClick={() => {
            writeContractAsync({
              abi: abi,
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
