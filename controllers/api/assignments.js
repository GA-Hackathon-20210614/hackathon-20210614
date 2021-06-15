const Assignments = require('../../models/assignment');

module.exports = {
	create,
};

async function create(req, res) {
	try {
		console.log("assignment create req.body: ", req.body);
	} catch (err) {
		res.status(400).json(err);
	}
}
