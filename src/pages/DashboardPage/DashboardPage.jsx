import React from 'react'
import './DashboardPage.scss'

export default function DashboardPage ({ user }) {
    return (
        <div>Teacher: {user.isTeacher ? 'true' : 'false'}</div>
    )
}
