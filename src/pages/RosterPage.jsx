import React from "react";
import PageHeading from "../components/PageHeading.jsx";
import StudentCard from "../components/StudentCard.jsx";
import { ROSTER } from "../data/students.js";

export default function RosterPage() {
  return (
    <div>
      <PageHeading title="Student roster" subtitle="Tap 'Add to favourite' on anyone you'd like to keep track of." />

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ROSTER.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
