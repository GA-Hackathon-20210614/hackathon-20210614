import React, { useState, useEffect } from 'react'
import ClassCard from '../../components/ClassCard/ClassCard'
import { useParams } from 'react-router-dom'
import * as classAPI from "../../utilities/classes-api";

export default function ClassPage({ user }) {
    const [students, setStudents] = useState([])
    let {id} = useParams();

    //function to get students from class
    useEffect(() => {
        async function getStudents(){
            const classes = await classAPI.getById(id)
            .then(res => console.log('bloop', res));
            // try{
            //     fetch(`http://localhost:3001/api/classes/${id}`)
            //         .then(res => res.json())
            //         .then((result)=>{
            //             console.log('bloop',result);
            //         })

            // } catch(err) {
            //     console.log(err)
            // }
        //We need class id
        //call to api with class id to get student array
        //save student array to student state
        }
        getStudents()
    })

    return(
        <div>
            List of Students
            { ClassCard }
            { students }
        </div>
    )
}