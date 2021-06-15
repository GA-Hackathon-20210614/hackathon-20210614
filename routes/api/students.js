const express = require('express');
const router = express.Router();
const studentsCtrl = require('../../controllers/api/students');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// /api/students/...

// CREATE students
router.post('/create', studentsCtrl.create);

// READ all students
router.get('/index', studentsCtrl.index);

// GET one student
router.get('/:id', ensureLoggedIn, studentsCtrl.findOne);

// UPDATE student
// router.put('/students/:id', studentsCtrl.update);
// DELETE students

router.delete('/:id', studentsCtrl.deleteStudent);

module.exports = router;
