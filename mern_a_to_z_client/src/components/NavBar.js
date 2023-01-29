import React from "react";
import "../App.css";
import logo from "../whiteHeart.png";

export default function NavBar() {
  return (
    <div className="nav-bar">
      &nbsp;&nbsp;
      <a href="/" className="grow-0">
        <img
          src={logo}
          alt="Rainbow Cross Logo"
          style={{
            height: "70px",
            width: "95px",
          }}
        />
      </a>
      <div style={{ width: "525px" }}></div>
      <div
        className="text-center"
        style={{ justifySelf: "flex-end", alignSelf: "center" }}
      >
        <div className="name">Rainbow Cross</div>
      </div>
    </div>
  );
}
