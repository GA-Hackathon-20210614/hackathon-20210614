import React from 'react'
import ClassCard from '../ClassCard/ClassCard'
import './ClassFeed.scss'


export default function ClassFeed ({ classes }) {



    return (
        <div id="class-feed-container">
            {
                classes.map(theClass => {
                    return <ClassCard key={theClass._id} theClass={theClass} />
                })
            }
            <div id="add-class-btn">
                +
            </div>
        </div>
    )
}