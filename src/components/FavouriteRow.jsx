import React from "react";
import { X } from "lucide-react";
import Avatar from "./Avatar.jsx";
import { useStudents } from "../context/StudentContext.jsx";

export default function FavouriteRow({ student }) {
  
  const { removeFavourite } = useStudents();

  return (
    <div style={{ background: "#FFFDF8", border: "1px solid #E4DCC8" }} className="rounded-xl p-4 flex items-center gap-4">
      <Avatar name={student.name} />
      <div className="flex-1 min-w-0">
        <p style={{ color: "#2A2721", fontFamily: "'Fraunces', serif" }} className="text-lg font-medium truncate">
          {student.name}
        </p>
        <span style={{ background: "#5C7F63", color: "#FBF7EE" }} className="text-xs px-2 py-0.5 rounded-full">
          Roll no. {student.roll}
        </span>
        <span style={{ color: "#7A7364" }} className="text-xs ml-2">
          {student.section}
        </span>
      </div>
     
      <button
        onClick={() => removeFavourite(student.id)}
        style={{ color: "#C1503B", border: "1.5px solid #C1503B" }}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium shrink-0 transition-colors duration-200 hover:bg-red-50"
      >
        <X size={15} />
        Remove
      </button>
    </div>
  );
}
