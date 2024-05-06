import Image from "next/image";
import React from "react";
const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image src={"/img/loading.gif"} alt={""} width={100} height={100}></Image>
    </div>
  );
};

export default Loading;
