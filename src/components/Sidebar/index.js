import React from "react";
import "./style.css";
import logo from "../../img/logo-vnt.png";
import { ImList2, ImUserPlus } from "react-icons/im";
import { Tooltip } from "antd";

export default function Sidebar() {
  return (
    <div className="side-bar">
      <a href="/">
        <img src={logo} alt="Welcome To The Future" />
      </a>

      <div>
        <Tooltip placement="right" title="Register Employee">
          <a href="/">
            <ImUserPlus size={20} color="rgba=(255, 255, 255, 0.9)" />
          </a>
        </Tooltip>
      </div>
      <div>
        <Tooltip placement="right" title="List Employee">
          <a href="/list-employee">
            <ImList2 size={20} color="rgba=(255, 255, 255 , 0.9)" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
