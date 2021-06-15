const express = require('express');
const router = express.Router();
const assignmentsCtrl = require('../../controllers/api/assignments');

// CREATE assignments
router.post('/assignments', assignmentsCtrl.create);
// READ all assignments
router.get('/assignments', assignmentsCtrl.index);
// UPDATE assignment
router.put('/assignments/:id', assignmentsCtrl.update);
// DELETE assignments
router.delete('/assignments/:id', assignmentsCtrl.deleteAssignment);

module.exports = router;
