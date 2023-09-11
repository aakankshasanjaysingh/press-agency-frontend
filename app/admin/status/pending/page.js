import Status from "@/components/Admin/status";
import React from "react";

export default function Pending() {
  return (
    <section className="flex justify-center items-center w-full h-full">
      <div className="w-[20vw] h-full">
        <Status />
      </div>
      <div className="w-[80vw] h-full flex justify-center items-center">
        yaha details waali table pending ki
      </div>
    </section>
  );
}