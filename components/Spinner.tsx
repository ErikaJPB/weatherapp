import React from "react";
import Image from "next/image";
import spinner from "../public/spinner.gif";

function Spinner() {
  return (
    <>
      <Image className="w-[200px] m-auto block" alt="loading" src={spinner} />
    </>
  );
}

export default Spinner;
