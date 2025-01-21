import { archives } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Archives = () => {
  return (
    <div className="ml-8 p-7 min-h-screen">
      <h1 className="font-bold text-xl">Archives</h1>
      <div className="grid grid-cols-2 gap-8 mt-7">
        {archives.map((archive, index) => (
          <div key={index} className="flex gap-3 border border-gray-200">
            <Image src="/cover1.png" alt="cover" width={200} height={200} />
            <div className="flex flex-col gap-1 pt-3">
              <Link
                href={`/archives/${archive.link}`}
                className="font-bold text-[#1E6292]"
              >
                {archive.title}
              </Link>
              <p className="text-gray-500 text-sm">{archive.vol}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archives;
