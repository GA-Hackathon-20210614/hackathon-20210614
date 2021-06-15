import React, { useState, useEffect } from 'react'
import './DashboardPage.scss'
import * as classApi from '../../utilities/classes-api'

export default function DashboardPage ({ user }) {

    const [classes, setClasses] = useState([])
    const [students, setStudents] = useState([])

    // If teacher is logged in, show their classes
    async function getClasses () {
        try {
            const allClasses = await classApi.getAll()
            const teachersClasses = allClasses.classes.filter(thisClass => user._id === thisClass.teacher)
            setClasses(teachersClasses)
        } catch (error) {
            console.log(error)
        }
    }

    // If parent is logged in, show their students
    function getStudents () {
        // nothing yet
    }

    useEffect(() => {
        if (user.isTeacher) {
            getClasses()
        } else {
            getStudents()
        }
    }, [])

    return (
        <div id="dashboard-container">Class count: {classes.length}</div>
    )
}
