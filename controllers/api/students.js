const Student = require('../../models/student');
const Classes = require('../../models/class');
const User = require('../../models/user');

module.exports = {
	create,
	index,
	findOne,
};

async function create(req, res) {
	try {
		const currentUser = req.user; // grabbing current user
		const { first_name, last_name } = req.body;

		if(currentUser.isTeacher) throw new Error("You cannot create a student");

		const student = await Student.create({
			first_name,
			last_name,
			parent: currentUser,
			teachers: [],
			classes: [],
			assignments: [],
		});

		res.json({ success: true, student });
	} catch (err) {
		res.status(400).json(err);
	}
}
	
async function index(req, res) {
	try {
		// show index of all students for testing
		const students = await Student.find({});
	
		res.json({ success: true, students});
	
	} catch {
		res.status(400).json('Couldn`t find students');
	}
}

async function findOne(req, res) {
	const _id = req.params.id;
	try {
		const currentUser = req.user; //grabbing current user
		// show specific student
		const student = await Student.findOne({_id});

		if(currentUser.isTeacher) {
			const parent =  await User.findOne({_id: student.parent }); // we might have to do this to get the name of the parent
			res.json({ student, parent});
		} else if (!currentUser.isTeacher && currentUser._id == student.parent) { // checking if this is the requesters child 
			const classes = await Classes.find({ students: student._id }); // we might have to do this to get the name of classes
			res.json({ student, classes});
		} else {
			res.json({ success: false, message: "Authorization error"});
		};
	
	} catch {
		res.status(400).json('Couldn`t find student');
	}
}
