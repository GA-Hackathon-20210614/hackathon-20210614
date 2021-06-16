import React from 'react'
import './ClassCard.scss'

export default function ClassCard ({ theClass }) {

    const endings = ['st', 'nd', 'rd', 'th']

    return (
        <div className="class-card">
            <div>{theClass.period}{theClass.period < 4 ? endings[theClass.period - 1] : endings[3]} Period</div>
            <div>{theClass.time}</div>
            <div>{theClass.students.length} {theClass.students.length === 1 ? 'student' : 'students'}</div>
        </div>
    )
}