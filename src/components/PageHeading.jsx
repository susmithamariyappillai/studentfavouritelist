import React from "react";

export default function PageHeading({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 style={{ fontFamily: "'Fraunces', serif", color: "#2A2721" }} className="text-2xl font-semibold">
        {title}
      </h2>
      <p style={{ color: "#7A7364" }} className="text-sm mt-1">
        {subtitle}
      </p>
    </div>
  );
}
