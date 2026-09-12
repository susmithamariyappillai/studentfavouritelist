import React from "react";


export default function Avatar({ name }) {
  
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <div
      style={{ background: "#5C7F63", color: "#FBF7EE", fontFamily: "'Fraunces', serif" }}
      className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-medium shrink-0"
    >
      {initials}
    </div>
  );
}
