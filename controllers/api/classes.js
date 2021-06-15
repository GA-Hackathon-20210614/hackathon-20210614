const Class = require('../../models/class');
const Student = require('../../models/student');
// javascript does not allow a variable called "class" ***

module.exports = {
    create,
    index
}

async function index(req, res) {
    try {
      // show index of all classes for testing
      const classes = await Class.find({});
  
      res.json({ sucess: true, classes});
  
    } catch {
      res.status(400).json('Couldn`t retrieve all classes');
    }
}

async function create(req, res) {
	try {
		const currentUser = req.user; // grabbing current user
        const students = Student.find({}); // grabbing all students (optional depending on form)

		const { subject, gradeLevel, period } = req.body;

		if(!currentUser.isTeacher) throw new Error("You cannot create a class");

		const createdClass = await Class.create({
            gradeLevel,
            period,
			subject,
			teacher: currentUser,
		});

		res.json({ success: true, createdClass });

	} catch (err) {
		res.status(400).json(err);
	}
}
