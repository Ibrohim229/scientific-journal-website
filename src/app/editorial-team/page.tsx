import { people } from "@/lib/data";
import React from "react";

const Editorial = () => {
  return (
    <div className="ml-8 p-7 min-h-screen">
      <h1 className="font-bold text-xl">Editorial team</h1>
      <div className="flex flex-col gap-4 mt-10">
        <h1 className="font-bold">
          Members of the editorial board of the scientific journal of the
          Bukhara State Medical Institute “Annals of Clinical Disciplines”:
        </h1>
        <div className="flex flex-col gap-2">
          {people.map((person, index) => (
            <p key={index}>
              <span className="font-bold">{person.name}</span> -{" "}
              {person.specialization}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editorial;
