const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
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
    },
    description: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Class', classSchema)