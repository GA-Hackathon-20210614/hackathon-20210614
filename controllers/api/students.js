const Student = require('../../models/student');

module.exports = {
	create,
};

async function create(req, res) {
	try {
		console.log("Student create req.body: ", req.body);
	} catch (err) {
		res.status(400).json(err);
	}
}
