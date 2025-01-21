"use client";

import { archives, statements } from "@/lib/data";
import { useParams } from "next/navigation";
import React from "react";

const ArchiveDetails = () => {
  const params = useParams();
  const { book } = params || {};

  const archive = archives.find((archive) => archive.link === book);

  if (!archive) {
    return <div className="ml-8 p-7 min-h-screen">Archive not found</div>;
  }

  return (
    <div className="ml-8 p-7 min-h-screen">
      <h1 className="font-bold text-xl">
        {archive.vol + ": " + archive.title}
      </h1>
      <div className="flex gap-4 mt-5">
        <img src={archive.image} alt="cover" width={200} height={200} />
        <div className="flex flex-col gap-1">
          <p className="font-bold text-sm">
            Published:{" "}
            <span className="font-normal text-gray-500">
              {archive.published}
            </span>
          </p>

          <p className="font-bold text-sm">
            Full issue:{" "}
            <a
              href="/pdf1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#1E6292]"
            >
              View PDF
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-20">
        <h3 className=" text-black text-lg">Statements</h3>

        <div className="flex flex-col gap-6">
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

export default ArchiveDetails;
