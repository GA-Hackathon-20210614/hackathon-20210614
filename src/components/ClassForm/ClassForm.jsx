import React, { useState } from 'react'
import './ClassForm.scss'


export default function ClassForm ({ handleCreateClass }) {

    const [error, setError] = useState(null)
    const [state, setState] = useState({
        level: 1,
        period: 1,
        subject: 'Math',
        time: '12:00 - 12:50'
    })

    function handleChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit (e) {
        e.preventDefault()
        handleCreateClass(state)
    }

    return (
        <div id="full-form">
            <h3>Add New Class</h3>
            <div className="class-form-container" onSubmit={handleSubmit}>
                <form id="inputs" autoComplete="off" >
                    <label>Grade Level</label>
                    <input type="number" name="level" value={state.level} onChange={handleChange} required />
                    <label>Class Period</label>
                    <input type="number" name="period" value={state.period} onChange={handleChange} required />
                    <label>Subject</label>
                    <input type="text" name="subject" value={state.subject} onChange={handleChange} required />
                    <label>Start and End Time</label>
                    <input type="text" name="time" value={state.time} onChange={handleChange} required />
                    <button type="submit">CREATE</button>
                </form>            
          </div>
          {error ? error : null}
        </div>
      );
}