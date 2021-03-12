import React from "react";
import { Link } from "react-router-dom";

type NavbarProps= {

}

export const Navbar:React.FC<NavbarProps>=()=> {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to="/cities" className="navbar-brand">
            Погода в городе
          </Link>
        </div>
      </nav>
  )
}


