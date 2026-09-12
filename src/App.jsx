import React from "react";
import { Routes, Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext.jsx";
import Nav from "./components/Nav.jsx";
import RosterPage from "./pages/RosterPage.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";

export default function App() {
  return (
    
    <StudentProvider>
      <div
        style={{
          
          background: "repeating-linear-gradient(#FBF7EE, #FBF7EE 31px, #EFE7D3 32px), #FBF7EE",
          fontFamily: "'Inter', sans-serif",
          minHeight: "100vh",
        }}
      >
        {/* --- Header bar --- */}
        <div style={{ background: "#1E293B" }} className="px-6 pt-7 pb-4">
          <h1 style={{ fontFamily: "'Fraunces', serif", color: "#FBF7EE" }} className="text-3xl font-semibold">
            Favourite Student List
          </h1>
        </div>

        {/* --- Navigation tabs (Student roster / Favourites) --- */}
        <Nav />

        {/* --- Page content ---*/}
        <div className="px-6 py-8 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<RosterPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </div>
      </div>
    </StudentProvider>
  );
}
