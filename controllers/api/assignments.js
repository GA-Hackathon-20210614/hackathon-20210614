const Assignments = require('../../models/assignment');

module.exports = {
	create,
	index,
	update,
	delete: deleteAssignment
};

async function create(req, res) {
	try {
		console.log("assignment create req.body: ", req.body);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function index(req, res) {
	try {
		console.log("assignment index req.body: ", req.body);
	} catch (err) {
		res.status(400).json(err);
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
