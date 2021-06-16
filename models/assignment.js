const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	dueDate: {
		type: Date,
		required: true
	},
	isCompleted: {
		type: Boolean,
		default: false,
		required: true
	},
	isLate: {
		type: Boolean,
		default: false,
		required: true
	}
}, {
	timestamps: true,
}
);

module.exports = mongoose.model('Assignment', assignmentSchema);
