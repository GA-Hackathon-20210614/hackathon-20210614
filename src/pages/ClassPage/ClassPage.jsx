import React, { useState, useEffect } from 'react'
import ClassCard from '../../components/ClassCard/ClassCard'
import { useParams } from 'react-router-dom';
import './ClassPage.scss';
import axios from 'axios';

export default function ClassPage({ user }) {
    const [students, setStudents] = useState([])
    const params = useParams();
    
    //function to get students from class
    async function getStudents(params){

        fetch(`http://localhost:3001/api/classes/${params.id}`)
            .then(res => res.json())
            .then((result)=>{
                console.log(result);
            })

        //We need class id
        //call to api with class id to get student array
        //save student array to student state
    }

    async function studentList(){
        getStudents();
        //itterate over student array with route to specific student id
    }

    useEffect(() => {
        // console.log(process.env.REACT_APP_SERVER_URL);
        if (user.isTeacher) {
          getStudents(params);
        } else {
          getStudents();
        }
    }, []);

    return(
        <div>
            List of Students
            { ClassCard }
            { studentList }
        </div>
    )
}