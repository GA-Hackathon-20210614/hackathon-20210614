const Attendance = require('../../models/attendance');

module.exports = {
    create,
    index,
    getDate,
};

async function create(req, res) {
    try {
        // I'm going off the idea that when it's time to take attendance, the TEACHER will click on TAKE ATTENDANCE, which will create a new entry into our DB with the date of "today" and populated by the classes' student ids.
        console.log("attendance create req.body: ", req.body);
        const today = (new Date()).toLocaleDateString("en-US")
        const attendance = await Attendance.create({
            date: today,
            students: req.body.students,
            class: req.body.class
        })

        res.json({ success: true, attendance})

    } catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    try {
        // retrieves all attendance
        const attendance = await Attendance.find({});
        res.json(attendance)
    } catch (err) {
        res.status(400).json("Error in retrieving ALL attendance.")
    }
}

async function getDate(req, res) {
    try {
        // retrieves TODAY's attendance
        const today = (new Date()).toLocaleDateString("en-US");
        const attendance = await Attendance.find({date: today});
        res.json(attendance)
    } catch (err) {
        res.status(400).json("Error in retrieving ALL attendance.")
    }
}

// async function update(req, res) {
//     try {
        
//     }
// }