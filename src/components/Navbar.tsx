import React from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-[#1E6292] px-8 pt-8 flex justify-between items-start z-30">
      <div className="flex flex-col gap-6">
        <h1 className="uppercase text-white text-xl font-bold">
          SCIENTIFIC AND PRACTICAL JOURNAL ANNALS OF CLINICAL DISCIPLINES
        </h1>

        <ul className="flex justify-center items-center">
          {navLinks.map((navLink) => (
            <Link
              href={navLink.href}
              passHref
              legacyBehavior
              key={navLink.href}
            >
              <li
                className="text-center text-white 
              hover:bg-slate-50 hover:bg-opacity-10 py-4 px-3 cursor-pointer"
              >
                {navLink.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-2">
          <Button variant="secondary" className="font-semibold">
            Register
          </Button>
          <Button variant="secondary" className="font-semibold">
            Log in
          </Button>
        </div>

        <div className="flex gap-4 text-sm">
          <button className="text-white hover:underline">Uzbek</button>
          <button className="text-white hover:underline">Russian</button>
          <button className="text-white hover:underline">English</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
