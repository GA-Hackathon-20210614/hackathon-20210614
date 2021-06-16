import React, { useState, useEffect } from "react";
import SideBarNav from "../SideBar/SideBarNav";
import "./Dashboard.scss";

export default function Dashboard(props) {
  const { user } = props;

  return (
    <div className="container">
      <SideBarNav user={user} />

      <div className="dash-container">

        <div className="dash-header">
          
        </div>

        <div className="dash-body">
            
        </div>

      </div>
    </div>
  );
}
