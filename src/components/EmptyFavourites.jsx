import React from "react";
import { Star } from "lucide-react";

export default function EmptyFavourites() {
  return (
    <div style={{ border: "1.5px dashed #C9BFA5", color: "#7A7364" }} className="rounded-xl py-16 flex flex-col items-center justify-center gap-3 text-center">
      <Star size={34} style={{ color: "#C8961E" }} />
      <p style={{ fontFamily: "'Fraunces', serif", color: "#2A2721" }} className="text-xl">
        No favourite students added yet
      </p>
      <p className="text-sm max-w-xs">
        Open a folder in the student roster and tap "Add to favourite" on anyone you'd like to see here.
      </p>
    </div>
  );
}
