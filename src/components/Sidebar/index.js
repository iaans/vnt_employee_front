import React from "react";
import "./style.css";
import logo from "../../img/logo-vnt.png";
import { ImList2, ImUserPlus } from "react-icons/im";

export default function Sidebar() {
  return (
    <div className="side-bar">
      <a href="/">
        <img src={logo} alt="Welcome To The Future" />
      </a>

      <div>
        <a href="/">
          <ImUserPlus size={20} color="rgba=(255, 255, 255, 0.9)" />
        </a>
      </div>
      <div>
        <a href="/list-employee">
          <ImList2 size={20} color="rgba=(255, 255, 255 , 0.9)" />
        </a>
      </div>
    </div>
  );
}
