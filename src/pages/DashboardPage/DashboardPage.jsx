import React, { useState, useEffect } from 'react'
import './DashboardPage.scss'

export default function DashboardPage ({ user }) {

    const [classes, setClasses] = useState([])
    const [students, setStudents] = useState([])

    // If teacher is logged in, show their classes
    async function getClasses () {
        try {
            console.log('nothing')
        } catch (error) {
            console.log(error)
        }
    }

    // If parent is logged in, show their students
    function getStudents () {

    }

    useEffect(() => {
        if (user.isTeacher) {
            getClasses()
        } else {
            getStudents()
        }
    }, [])

    return (
        <div id="dashboard-container">Teacher: {user.isTeacher ? 'true' : 'false'}</div>
    )
}
