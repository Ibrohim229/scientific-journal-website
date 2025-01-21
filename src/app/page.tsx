import { statements } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Current = () => {
  return (
    <div className="ml-8 p-7 min-h-screen">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl">Current issue</h1>
        <h1 className="font-bold text-lg">
          Vol. 1 No. 3 (2024): ANNALS AND CLINICAL DISCIPLINE
        </h1>

        <p className="font-bold text-base">
          Published: <span className="font-normal">2024-11-04</span>
        </p>

        <Image src="/cover1.png" alt="cover" width={200} height={200} />
      </div>

      <div className="flex flex-col gap-4 mt-20 pt-4">
        <h3 className=" text-black text-lg">Statements</h3>

        <div className="grid grid-cols-2 gap-6">
          {statements.map((statement, index) => (
            <div key={index} className="flex flex-col gap-1">
              <h1 className="font-bold  text-[#1E6292]">{statement.title}</h1>
              <p className="text-gray-500 text-sm">{statement.content}</p>
              <a
                href="/pdf1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[#1E6292] border border-[#1E6292] 
                text-[#1E6292] hover:text-white px-2 py-1 rounded-md w-[80px] text-center text-sm"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Current;
