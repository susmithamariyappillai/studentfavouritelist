import React from "react";
import { Star } from "lucide-react";
import Avatar from "./Avatar.jsx";
import { useStudents } from "../context/StudentContext.jsx";


export default function StudentCard({ student }) {
  
  const { isFavourite, addFavourite, removeFavourite } = useStudents();

  
  const favourited = isFavourite(student.id);

  return (
    <div
      style={{
        background: "#FFFDF8",
        border: "1px solid #E4DCC8",
        
        boxShadow: favourited ? "0 0 0 2px #C8961E inset" : "none",
      }}
      className="rounded-xl p-5 flex items-center gap-4 transition-shadow duration-200"
    >
      <Avatar name={student.name} />

      <div className="flex-1 min-w-0">
        <p style={{ color: "#2A2721", fontFamily: "'Fraunces', serif" }} className="text-lg font-medium truncate">
          {student.name}
        </p>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span style={{ background: "#5C7F63", color: "#FBF7EE" }} className="text-xs px-2 py-0.5 rounded-full">
            Roll no. {student.roll}
          </span>
          <span style={{ color: "#7A7364" }} className="text-xs">
            {student.section}
          </span>
        </div>
        <p style={{ color: "#9A927E" }} className="text-xs mt-1 italic">
          Favourite subject: {student.subject}
        </p>
      </div>

      
      <button
        onClick={() => (favourited ? removeFavourite(student.id) : addFavourite(student))}
        style={{
          background: favourited ? "#C8961E" : "transparent",
          color: favourited ? "#FBF7EE" : "#C8961E",
          border: "1.5px solid #C8961E",
        }}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium shrink-0 transition-colors duration-200 hover:opacity-90"
      >
        <Star size={15} fill={favourited ? "#FBF7EE" : "none"} />
        {favourited ? "Favourited" : "Add to favourite"}
      </button>
    </div>
  );
}
