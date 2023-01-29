import React from "react";
import "../App.css";
import logo from "../whiteHeart.png";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <a href="/" className="grow-0">
        <img
          src={logo}
          alt="Rainbow Cross Logo"
          style={{
            height: "45px",
            width: "66px",
          }}
        />
      </a>
    </div>
  );
}
