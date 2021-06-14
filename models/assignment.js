const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
	student: {
		type: Object,
		required: true
	},
	class: {
		type: Object,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	content: {
		type: String
	},
	dueDate: {
		type: Date
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
