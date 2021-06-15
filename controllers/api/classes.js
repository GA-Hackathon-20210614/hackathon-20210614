const Class = require('../../models/class');

module.exports = {
    index
}

async function index(req, res) {
    try {
        const theClass = await Class.findOne({ _id: req.params.id });

        if (req.user.isTeacher) {
            res.status(200).json({ class: theClass });
        } else {
            theClass.students = theClass.students.filter(student => {
                return student.parent === res.user._id
            });
            res.status(200).json({ class: theClass });
        }
    } catch (err) {
        res.status(400).json(err);
    }
}
