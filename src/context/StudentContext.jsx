import React, { createContext, useContext, useState } from "react";
const StudentContext = createContext(null);


export function useStudents() {
  return useContext(StudentContext);
}


export function StudentProvider({ children }) {
  
  const [favourites, setFavourites] = useState([]);

  
  const isFavourite = (id) => favourites.some((s) => s.id === id);

  const addFavourite = (student) => {
    
    setFavourites((prev) => (prev.some((s) => s.id === student.id) ? prev : [...prev, student]));
  };

  const removeFavourite = (id) => {
    
    setFavourites((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    
    <StudentContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite }}>
      {children}
    </StudentContext.Provider>
  );
}
