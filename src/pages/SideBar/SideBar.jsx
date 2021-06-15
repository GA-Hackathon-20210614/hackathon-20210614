import React from 'react';
import Button from '@material-ui/core/Button';
import DashboardPic from "../../images/dashboard.svg";
import AssignmentPic from "../../images/assignment.svg";


function SideBar(props) {
    return (
        <div>
            <img></img>
            <h1>sign in user name</h1>
            
            <Button variant="contaned" color="primary"><img src={DashboardPic} /> Dashboard</Button>
            <Button variant="contaned" color="secondary"><img src={AssignmentPic} /> Gradebook</Button>
            <h3>Settings</h3>
            <button>Main Settings</button>
        </div>
    );
}

export default SideBar;