import "../Styles/button.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Buttons({ text , p }) {
  return (
    <NavLink to = {p}>
      <div className="btn">
      {text}
    </div>
    </NavLink>
  );
}
