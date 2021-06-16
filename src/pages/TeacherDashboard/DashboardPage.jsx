
import React, { useState, useEffect } from 'react';
import './DashboardPage.scss';
import * as classApi from '../../utilities/classes-api';
import * as userApi from '../../utilities/users-api';
import ClassFeed from '../../components/ClassFeed/ClassFeed';
import MaterialModal from '../../components/MaterialModal/MaterialModal';
import SideBarNav from '../../components/SideBar/SideBarNav';

export default function DashboardPage ({ user }) {

    return (
        <div id="dashboard-container">
            <SideBarNav user={user} />

            <div id="dash-header">      
            </div>   
        </div>
    )
}