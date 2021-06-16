const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentsSchema = new mongoose.Schema({
    
    title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	dueDate: {
		type: String,
		required: true
	},
	isCompleted: {
		type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student'
            }
        ],
	},
	isLate: {
		type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student'
            }
        ],
	}
}, {
	timestamps: true,
}
);

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
    time: {
        type: String,
        required: true
    },
    assignments: [assignmentsSchema],
    description: String
}, {
    timestamps: true
})

//pass in Object for add
classSchema.method('addAssign', function(assignmentId){
    return 'Assignment add touched';
})

//pass in Object
classSchema.method('putAssign', function(assignmentId){
    //this.
    return 'Assignment update touched';
})

classSchema.method('deleteAssign', function(assignmentId){
    this.assignments.find()
    return 'Assignment delete touched';
})
module.exports = mongoose.model('Class', classSchema)