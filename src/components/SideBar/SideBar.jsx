import React from 'react';
import Button from '@material-ui/core/Button';
import DashboardIcon from "../../images/dashboard.svg";
import AssignmentIcon from "../../images/assignment.svg";
import SettingsIcon from "../../images/settings.svg";

import Image from '../Image/Image';


function SideBar(props) {
    const caption = "user"
    return (
        <div>   
            <Button variant="contained"><img src={DashboardIcon} /> Dashboard</Button>
            <Button variant="contained"><img src={AssignmentIcon} /> Gradebook</Button>
            <button>Settings</button>
            <Button variant="contained"><img src={SettingsIcon} /> Main Settings</Button>
        </div>
    );
}

export default SideBar;