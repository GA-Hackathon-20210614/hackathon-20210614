const Student = require('../../models/student');

module.exports = {
	create,
	update
	
};
async function create(req, res) {
	try {
		console.log("Student create req.body: ", req.body);
	} catch (err) {
		res.status(400).json(err);
	}
}


//Update Student's name
async function update(req, res) {
	try {
		console.log("Student update req.body: ", req.body);
	} catch (err) {
		res.status(400).json(err);
	}
}