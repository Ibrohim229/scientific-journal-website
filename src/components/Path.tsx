"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Path = () => {
  const pathname = usePathname(); // Get the current path
  const pathSegments = pathname.split("/").filter(Boolean); // Split path into segments

  return (
    <div className="ml-14 mt-9 flex gap-1">
      {/* Always show the Home link */}
      <Link href="/" className="hover:underline text-[#1E6292]">
        Home
      </Link>
      {pathSegments.map((segment, index) => {
        // Create the cumulative path for each segment
        const fullPath = `/${pathSegments.slice(0, index + 1).join("/")}`;

        // Capitalize the first letter of the segment
        const formattedSegment =
          segment.charAt(0).toUpperCase() + segment.slice(1);

        // Check if it's the last segment (current path)
        const isLastSegment = index === pathSegments.length - 1;

        return (
          <React.Fragment key={fullPath}>
            {" / "}
            {isLastSegment ? (
              // Render the current segment as non-clickable and gray
              <span className="text-gray-500">{formattedSegment}</span>
            ) : (
              // Render other segments as clickable links
              <Link href={fullPath} className="hover:underline text-[#1E6292]">
                {formattedSegment}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Path;
