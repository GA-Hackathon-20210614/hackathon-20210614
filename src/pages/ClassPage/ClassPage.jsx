import React, { useState, useEffect } from 'react'
import './ClassPage.scss'
import ClassCard from '../../components/ClassCard/ClassCard'

export default function ClassPage({ user }) {
    const [students, setStudents] = useState([])

    //function to get students from class
    async function getStudents(){
        //We need class id
        //call to api with class id to get student array
        //save student array to student state
    }

    async function studentList(){
        //itterate over student array with route to specific student id
    }

    return(
        <div>
            List of Students
            { ClassCard }
            { studentList }
        </div>
    )
}