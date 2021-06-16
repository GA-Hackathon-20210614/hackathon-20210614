import React, { useState, useEffect } from "react";

import SideBarNav from "../SideBar/SideBarNav";
import Header from "../../pages/TeacherDashboard/sections/Header";
import Body from "../../pages/TeacherDashboard/sections/Body";

import "./Dashboard.scss";

export default function Dashboard(props) {
  const { user } = props;

  return (
    <div className="container">
      <SideBarNav user={user} />

      <div className="dash-container">

        <div className="dash-header">
          <div className="header-txt">
            <Header />
          </div>
        </div>

        <div className="dash-body">
            <Body />
        </div>

      </div>
    </div>
  );
}
