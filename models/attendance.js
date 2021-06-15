const mongoose = require('mongoose')

const attendanceSchema = mongoose.Schema({
    students: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student'
            }
        ],
        default: []
    },
    date: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true,
        min: 1
    },
    class: {
        type: Number,
        required: true,
        min: 1
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Attendance', attendanceSchema)