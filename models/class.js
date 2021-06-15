const mongoose = require('mongoose')

const classSchema = mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
    subject: {
        type: String,
        required: true
    },
    gradeLevel: {
        type: Number,
        required: true,
        min: 1
    },
    period: {
        type: Number,
        required: true,
        min: 1
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Class', classSchema)