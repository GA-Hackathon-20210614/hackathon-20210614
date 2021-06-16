const Attendance = require('../../models/attendance');

module.exports = {
    create,
    index,
    getDate,
    update,
    remove,
};

async function create(req, res) {
    try {
        // I'm going off the idea that when it's time to take attendance, the TEACHER will click on TAKE ATTENDANCE, which will create a new entry into our DB with the date of "today" and populated by the classes' student ids.
        console.log("attendance create req.body: ", req.body);
        const today = (new Date()).toLocaleDateString("en-US")
        // Frontend check if exists with getDate request
        const attendance = await Attendance.create({
            date: today,
            students: [],
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
        res.json({ success: true, attendance})
    } catch (err) {
        res.status(400).json("Error in retrieving ALL attendance.")
    }
}

async function getDate(req, res) {
    try {
        // retrieves TODAY's attendance
        const today = (new Date()).toLocaleDateString("en-US");
        const attendance = await Attendance.find({date: today});
        res.json({ success: true, attendance})
    } catch (err) {
        res.status(400).json("Error in retrieving Today's attendance.")
    }
}

async function update(req, res) {
    try {
        // Accepts an array of students as the req.body. Expects req.body to only be an {students: ["id", "id2", ....]}
        console.log("attendance UPDATE req.body: ", req.params.id, req.body.students);
        const updatedAttendance = await Attendance.findByIdAndUpdate(req.params.id, { students: req.body.students}, {new:true})
        res.json({ success: true, updatedAttendance})
    } catch (err) {
        res.status(400).json("Error with updating student list")
    }
}


async function remove(req, res) {
    try{
        const deletedAttendanceID = await Attendance.findByIdAndRemove(req.params.id);
        res.json({ success: true, deletedAttendanceID})
    } catch (err) {
        res.status(400).json("Error with Deleting attendance")
    }
}