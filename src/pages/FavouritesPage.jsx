import React from "react";
import PageHeading from "../components/PageHeading.jsx";
import FavouriteRow from "../components/FavouriteRow.jsx";
import EmptyFavourites from "../components/EmptyFavourites.jsx";
import { useStudents } from "../context/StudentContext.jsx";

export default function FavouritesPage() {
  const { favourites } = useStudents();

  return (
    <div>
      <PageHeading
        title="Favourites"
        subtitle={
          favourites.length > 0
            ? "The students you've marked to keep track of."
            : "Nothing marked yet — this page fills up as you go."
        }
      />

      
      {favourites.length === 0 ? (
        <EmptyFavourites />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {favourites.map((student) => (
            <FavouriteRow key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
}
