import React, { useState, useEffect } from "react";
import SideBarNav from "../../components/SideBar/SideBarNav";
import * as classApi from '../../utilities/classes-api';
import * as userApi from '../../utilities/users-api';
import ClassFeed from '../../components/ClassFeed/ClassFeed';
import MaterialModal from '../../components/MaterialModal/MaterialModal';

import Body from './sections/Body';
import Header from './sections/Header';

import "./TeacherDashboard.scss";

export default function TeacherDashboard(props) {
  
  const { user } = props;
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);

    async function getDashboard() {
        try {
            const userData = await userApi.getDashboard();
            userData.userIsTeacher ? setClasses(userData.classes) : setStudents(userData.children);
            console.log(userData);
        } catch (error) {
            console.log('error gathering user information');
        }
    }

    // Add a class if teacher
    async function addClass (data) {
        try {
            await classApi.create(data);
        } catch (error) {
            console.log(error)
        }
    }

    function handleAnnouncementClick () {
        // Get form for new announcement
    }

    useEffect(() => {
        if (user) {
            getDashboard()
        } else {
            getDashboard()
        }
    }, [])

    console.log(classes)

  return (
    <div className="container">
      <SideBarNav user={user} />

      <div className="dash-container">
            <Header user={user} />
        
        <div className="dash-body">
            <Body user={user} classes={classes}/>
        </div>

      </div>
    </div>
  );
}
