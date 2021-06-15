const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchedma = new Schema({
    date: {
        type: String,
        default: "1/1/1900",
        required: true
    },
    students: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student'
            }
        ],
        default: []
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true,
    }
    // Did not add "grade" from lucidchart. Class is catch-all for determining if a student is present and class already has gradeLevel. Wasn't sure if grade was necessary -please review
}, {
    timestamps: true
})

module.exports = mongoose.model('Attendance', attendanceSchedma)