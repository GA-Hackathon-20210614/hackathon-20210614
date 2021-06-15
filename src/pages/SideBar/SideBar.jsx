import React from 'react';
import Button from '@material-ui/core/Button';


function SideBar(props) {
    return (
        <div>
            <img></img>
            <h1>sign in user name</h1>
            <Button variant="contaned" color="primary">Dashboard</Button>
            <button>Gradebook</button>
            <h3>Settings</h3>
            <button>Main Settings</button>
        </div>
    );
}

export default SideBar;