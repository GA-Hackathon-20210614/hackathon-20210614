const Student = require('../../models/student');

module.exports = {
	create,
	index,
};

async function create(req, res) {
	try {
		const currentUser = req.user;
		const { first_name, last_name } = req.body;

		if(currentUser.isTeacher) throw new Error("You cannot create a student")

		const student = await Student.create({
			first_name,
			last_name,
			parent: currentUser,
			teachers: [],
			classes: [],
			assignments: [],
		});

		res.json({ success: true, student })
	} catch (err) {
		res.status(400).json(err);
	}
}
	
async function index(req, res) {
	try {
		// show index of all students for testing
		const students = await Student.find({});
	
		res.json({ success: true, students})
	
	} catch {
		res.status(400).json('Couldn`t find students');
	}
}
