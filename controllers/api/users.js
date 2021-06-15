const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken,
  index,
  findOne,
  edit,
  remove,
};

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code take this into consideration
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code 
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    // show index of all users for testing
    const users = await User.find({}).select('-password');

    res.json({ success: true, users})

  } catch {
    res.status(400).json('Couldn`t find users');
  }
}

async function findOne(req, res) {
  const _id = req.params.id
  try {
    // show one user - we are using id for params?
    const user = await User.findOne({_id});
    console.log(user)

    if(!user.isTeacher) throw new Error("User is not a teacher")
    res.json({ success: true, user});

  } catch (error) {
      console.error(error);
      if (error.message === "User is not a teacher") {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "User not found",
        });
      }
  }
}

// Route to edit a User
async function edit(req, res) {
  const _id = req.params.id;
  try {
    // find the current user
    const currentUser = req.user;

    // check if the user is editing only themselves
    if (currentUser._id !== _id) throw new Error("Forbidden");

    const { email, oldPassword, newPassword, first_name, last_name } = req.body;

    const user = await User.findOne({ _id });

    // if user submitted an oldPassword and newPassword
    if (oldPassword && newPassword) {
      // compare old password
      const isValid = await bcrypt.compare(oldPassword, user.password);
      if (!isValid) throw new Error("Old Password Inccorect");

      const isOldPassword = await bcrypt.compare(newPassword, user.password);
      if (isOldPassword) throw new Error("New Password Cannot Be Old Password");

      // Salt and hash the password.
      bcrypt.genSalt(8, (error, salt) => {
        if (error) throw new Error("Salt Generation Failed");

        bcrypt.hash(newPassword, salt, async (error, hash) => {
          if (error) throw new Error("Hash Password Failure");

          // We can now save that new password.
          user.password = hash;
          await user.save();
        }); 
      });
    };

    user.email = email;
    user.first_name = first_name;
    user.last_name = last_name;

    // Save the user and the changes.
    await user.save();

    res.json({ success: true, message: "User Edit Successful." });
  } catch (error) {
    console.error(error);
    if (error.message === "Forbidden") {
      res.status(403).json({
        success: false,
        message: "You Must Be logged In As That User To Do That",
      });
    } else if (error.name === 'MongoError') {
      const needToChange = error.keyPattern;
      res.status(409).json({
        success: false,
        message: "DataBase Error",
        needToChange
      });
    } else {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error();
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Bad Credentials");

    const token = createJWT(user);
    res.json(token);
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

// Route to Delete a User
async function remove(req, res) {
  // id of user to delete
  const _id = req.params.id;

  try {

    const currentUser = req.user;

    // check if the user is deleting only themselves
    if (currentUser._id !== _id) throw new Error("Forbidden");

    const user = await User.findOne({ _id });

    const { passwordConfirmation } = req.body
    const isValid = await bcrypt.compare(passwordConfirmation, user.password);

    if (!isValid) throw new Error("Incorrect Password");
    
    // then delete from db
    await user.delete();

    res.status(200).json({
      success: true,
      message: "User Deleted",
    });

  } catch (error) {
    console.error(error);
    if (error.message === "Forbidden") {
      res.status(403).json({
        success: false,
        message: "You Must Be logged In As That User To Do That",
      });
    } else {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
};

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}