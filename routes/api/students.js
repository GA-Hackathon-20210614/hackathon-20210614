const express = require('express');
const router = express.Router();
const studentsCtrl = require('../../controllers/api/students');

// CREATE students
router.post('/create', studentsCtrl.create);
// READ all students
router.get('/index', studentsCtrl.index);




// UPDATE student
// router.put('/students/:id', studentsCtrl.update);
// DELETE students
// router.delete('/students/:id', studentsCtrl.delete);

module.exports = router;
