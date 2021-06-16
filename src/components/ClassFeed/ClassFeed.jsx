import React from 'react'
import ClassCard from '../ClassCard/ClassCard'
import MaterialModal from '../MaterialModal/MaterialModal'
import './ClassFeed.scss'

export default function ClassFeed ({ classes, handleClick }) {



    return (
        <div className="class-feed-container">
            {
                classes.map(theClass => {
                    return <ClassCard key={theClass._id} theClass={theClass} />
                })
            }
        
            <MaterialModal handleClick={handleClick} btnClass="class-card add-class-btn" buttonText={
                <div>
                    +
                </div>
            }/>
            
        </div>
    )
}