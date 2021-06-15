const Attendance = require('../../models/attendance');

module.exports = {
	create,
};

async function create(req, res) {
	try {
		console.log("attendance create req.body: ", req.body);
	} catch (err) {
		res.status(400).json(err);
	}
}
