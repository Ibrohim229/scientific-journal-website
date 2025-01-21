import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bottom-0 left-0 right-0 bg-[#DDDDDD] h-56 mt-10">
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500 text-sm">
          &copy; {year} University Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
