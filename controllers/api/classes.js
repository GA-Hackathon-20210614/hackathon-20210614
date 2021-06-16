const Class = require("../../models/class");
const Student = require("../../models/student");
const User = require("../../models/user");
const bcrypt = require("bcrypt");
// javascript does not allow a variable called "class" ***

module.exports = {
  create,
  edit,
  findClass,
  remove,
  index,
  deleteAssignment,
  addAssignment,
  getAssignment
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

async function findClass(req, res) {
  const _id = req.params.id;
	try {
		const currentUser = req.user; //grabbing current user

    const targetClass = await Class.findOne({ _id });
    if (!targetClass) throw new Error("Class does not exist");

    // check if the teacher owns the class
    if (currentUser._id != targetClass.teacher) throw new Error("Forbidden");

    res.json({success: true, targetClass})
	} catch {
		res.status(400).json('Couldn`t find class');
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

// Route to Delete a Class
async function remove(req, res) {
  // id of class to delete
  const _id = req.params.id;

  try {
    const currentUser = req.user;
    console.log(currentUser)

    const targetClass = await Class.findOne({ _id });
    if (!targetClass) throw new Error("Class does not exist");

    // check if the teacher owns the class
    if (currentUser._id != targetClass.teacher) throw new Error("Forbidden");
    // targeting teacher to check password
    const teacher = await User.findOne({ _id: currentUser._id });

    const { passwordConfirmation } = req.body;
    const isValid = await bcrypt.compare(

      passwordConfirmation, teacher.password
    );

    if (!isValid) throw new Error("Incorrect Password");

    // then delete from db
    await targetClass.delete();

    res.status(200).json({
      success: true,
      message: "Class Deleted",
    });
  } catch (error) {
    console.error(error);
    if (error.message === "Forbidden") {
      res.status(403).json({
        success: false,
        message: "You don't own this class!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}

async function deleteAssignment(req ,res){
  const _id = req.params.class_id;
  const targetClass = await Class.findOne({ _id });
  
  res.json(targetClass.deleteAssign(req.params.assignment_id));
  
}
// Route to get a specific assignment;
async function getAssignment(req, res) {
  const { assignment_id } = req.params;
  try {
    const targetClass = await Class.find({ 'assignments._id': `${assignment_id}` }, {'assignments.$': 1});
    res.json({success: true, targetClass})

  } catch (error) {
    console.error(error)
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

// Route to add an assignment to class;
async function addAssignment(req, res) {
    const _id = req.params.id;
    try {
      // find the current user
      const currentUser = req.user;
  
      const { title, content, dueDate } = req.body;
  
      const targetClass = await Class.findOne({ _id });
  
      // check if the teacher owns the class
      if (currentUser._id != targetClass.teacher) throw new Error("Forbidden");
      
      targetClass.assignments.push({
          title,
          content,
          dueDate
      })

      // Save the user and the changes.
      await targetClass.save();
  
      res.json({ success: true, message: "Added Assignment.", targetClass });
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

