const Assignments = require('../../models/assignment');

module.exports = {
	create,
	index,
	update,
	delete: deleteAssignment
};

async function create(req, res) {
	try {
		const currentUser = req.user; // grabbing current user
		const { title, content, dueDate, isCompleted, isLate } = req.body;

		if(!currentUser.isTeacher) throw new Error("You cannot create a class!");

		const assignment = await Assignments.create({
			title,
			content,
			dueDate,
			isCompleted, 
			isLate
		});

		res.json({ success: true, message: "Assignment created", assignment });
	} catch (err) {
		res.status(400).json(err);
	}
}

async function index(req, res) {
	try {
	  // show index of all assignments for testing
	  const assignments = await Assignments.find({});
  
	  res.json({ sucess: true, assignments });
	} catch {
	  res.status(400).json("Couldn`t retrieve assignments");
	}
  }

async function update(req, res) {
	try {
		console.log("assignment update req.body: ", req.body);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function deleteAssignment(req, res, next) {
	try {
		console.log("assignment delete req.body: ", req.body);
		res.redirect(`/`);
	} catch (err) {
		return next(err);
	}
}

async function deleteAssignment(req, res) {
	try{

		const assignment = await Assignment.findByIdAndDelete(
			req.params.id,
			function(err){
				if(err){
					res.json({success: false , err });
				}
				else {
					res.json('Deleted');
				}
			});

		res.json({ success: true, assignment })
	} catch (err) {
		res.status(400).json(err);
	}
}
