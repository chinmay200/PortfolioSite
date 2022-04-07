import "../Styles/button.css";
import React from "react";

export default function Buttons({ text }) {
  return (
    <a href="#" className="btn">
      {text}
    </a>
  );
}
