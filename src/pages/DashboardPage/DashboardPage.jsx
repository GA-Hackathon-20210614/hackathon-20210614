import React, { useState, useEffect } from 'react';
import './DashboardPage.scss';
import * as classApi from '../../utilities/classes-api';
import ClassFeed from '../../components/ClassFeed/ClassFeed';
import SideBarNav from '../SideBar/SideBarNav';
import MaterialModal from '../../components/MaterialModal/MaterialModal';

export default function DashboardPage ({ user }) {

    const [classes, setClasses] = useState([])
    const [students, setStudents] = useState([])

    const mockClasses = [
        {
            subject: 'Math',
            period: 2,
            students: [1,2,3,4,5],
            _id: 495847594
        },
        {
            subject: 'English',
            period: 3,
            students: [1,2,3,4,5,6,7,8],
            _id: 495847563
        }

    ]

    // If teacher is logged in, show their classes
    async function getClasses () {
        try {
            const allClasses = await classApi.getAll()
            const teachersClasses = allClasses.classes.filter(thisClass => user._id === thisClass.teacher)
            setClasses([...teachersClasses, ...mockClasses])
        } catch (error) {
            console.log(error)
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

    // If parent is logged in, show their students
    function getStudents () {
        // nothing yet
    }

    useEffect(() => {
        console.log( process.env.REACT_APP_SERVER_URL );
        if (user.isTeacher) {
            getClasses()
        } else {
            getStudents()
        }
    }, [])

    return (
        <div id="dashboard-container">
            <SideBarNav />
            <div id="dash-header">
                { process.env.REACT_APP_SERVER_URL }
                <h1>School Title</h1>
                <h2>Hi, {user.first_name}!</h2>
                <div className="dash-btn">
                    <MaterialModal buttonText="Announcements" />
                </div>
            </div>
            <ClassFeed classes={classes} />
        </div>
    )
}
