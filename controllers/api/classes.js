const Class = require("../../models/class");
const Student = require("../../models/student");
// javascript does not allow a variable called "class" ***

module.exports = {
  create,
  edit,
  index,
};

async function index(req, res) {
  try {
    // show index of all classes for testing
    const classes = await Class.find({});

    res.json({ sucess: true, classes });
  } catch {
    res.status(400).json("Couldn`t retrieve all classes");
  }
}

async function create(req, res) {
  try {
    const currentUser = req.user; // grabbing current user
    const students = Student.find({}); // grabbing all students (optional depending on form)

    const { subject, gradeLevel, period } = req.body;

    if (!currentUser.isTeacher) throw new Error("You are not a teachers");

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

async function edit(req, res) {
  const _id = req.params.id;
  try {
    // find the current user
    const currentUser = req.user;

    const { subject, gradeLevel, period } = req.body;

    const targetClass = await Class.findOne({ _id });

    // check if the teacher owns the class
    if (currentUser._id != targetClass.teacher) throw new Error("Forbidden");

    targetClass.subject = subject;
    targetClass.gradeLevel = gradeLevel;
    targetClass.period = period;

    // Save the user and the changes.
    await targetClass.save();

    res.json({ success: true, message: "Edit class Successful.", targetClass });
  } catch (error) {
    console.error(error);
    if (error.message === "Forbidden") {
      res.status(403).json({
        success: false,
        message: "You do not own this class",
      });
    } else if (error.name === "MongoError") {
      const needToChange = error.keyPattern;
      res.status(409).json({
        success: false,
        message: "DataBase Error",
        needToChange,
      });
    } else {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}
