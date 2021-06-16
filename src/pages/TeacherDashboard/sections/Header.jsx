import React from 'react';
import MaterialModal from '../../../components/MaterialModal/MaterialModal';
import "./Header.scss";

export default function Header({ user }) {
    return (
        <>
        <div className="dash-header">
            <div className="greeting">
                <h1>School Title</h1>
                <h2>Hi, {user.first_name}!</h2>
            </div>

            <div className="dash-btn">
                <MaterialModal buttonText="Announcements" />
            </div>

        </div>
        </>
    )
}
