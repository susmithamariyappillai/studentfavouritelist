import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Star, NotebookText } from "lucide-react";
import { useStudents } from "../context/StudentContext.jsx";


function NavLink({ to, children }) {
  
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link
      to={to}
      style={{
        fontFamily: "'Fraunces', serif",
        color: active ? "#FBF7EE" : "#B7C0CC",
        background: active ? "#2A3B52" : "transparent",
      }}
      className="relative px-5 py-3 rounded-t-lg text-base transition-colors duration-200 flex items-center gap-2 no-underline"
    >
      {children}
    </Link>
  );
}

function BinderRings() {
  
  return (
    <div className="flex gap-3 px-5">
      {[0, 1, 2].map((i) => (
        <span
          key={i} // React needs a unique "key" on every item in a list
          style={{ background: "#FBF7EE", border: "2px solid #1E293B" }}
          className="w-3.5 h-3.5 rounded-full inline-block"
        />
      ))}
    </div>
  );
}

export default function Nav() {
  
  const { favourites } = useStudents();

  return (
    <nav style={{ background: "#1E293B" }} className="flex items-end justify-between px-6 pt-4">
      <div className="flex items-end gap-1">
        <NavLink to="/">
          <NotebookText size={17} />
          Student roster
        </NavLink>
        <NavLink to="/favourites">
          <Star size={17} />
         
          Favourites{favourites.length > 0 ? ` · ${favourites.length}` : ""}
        </NavLink>
      </div>
      <BinderRings />
    </nav>
  );
}
