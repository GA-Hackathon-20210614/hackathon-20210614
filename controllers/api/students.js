const Student = require('../../models/student');
const Classes = require('../../models/class');
const User = require('../../models/user');

module.exports = {
	create,
	index,
	update,
	deleteStudent,
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


async function update(req, res) {
	try{
		const { first_name, last_name } = req.body;

		const student = await Student.findByIdAndUpdate(
			req.params.id,
			{
				first_name,
				last_name,
				teachers: [],
				classes: [],
				assignments: [],
		});
		res.json({ success: true, student })
	} catch (err) {
		res.status(400).json(err);
	}
}

//make accessible to only teachers
async function deleteStudent(req, res) {
	try{
		const student = await Student.findByIdAndDelete(
			req.params.id,
			function(err){
				if(err){
					console.log('Deletion failed',err);
				}
				else {
					console.log('Deleted');
				}
			});

		res.json({ success: true, student })
	} catch (err) {
		res.status(400).json(err);
	}
}

async function findOne(req, res) {
	const _id = req.params.id;
	try {
		const currentUser = req.user; //grabbing current user
		// show specific student
		const student = await Student.findOne({_id});
		const classes = await Classes.find({ students: student._id });
		const parent =  await User.findOne({_id: student.parent });
		if (!currentUser.isTeacher && currentUser._id == student.parent) throw new Error("Authorization error")

		res.json({ student, classes, parent});

		// if(currentUser.isTeacher) {
		// 	const classes = await Classes.find({ students: student._id }); // we might have to do this to get the name of classes
		// 	const parent =  await User.findOne({_id: student.parent }); // we might have to do this to get the name of the parent

		// 	res.json({ student, classes, parent});
		// } else if (!currentUser.isTeacher && currentUser._id == student.parent) { // checking if this is the requesters child 
		// 	const classes = await Classes.find({ students: student._id }); // we might have to do this to get the name of classes
		// 	const parent =  await User.findOne({_id: student.parent });
		// 	res.json({ student, classes, parent});
		// } else {
		// 	res.json({ success: false, message: "Authorization error"});
		// };
	
	} catch {
		res.status(400).json('Couldn`t find student');
	}
}
