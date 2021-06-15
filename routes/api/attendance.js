const express = require('express');
const router = express.Router();
const attendanceCtrl = require('../../controllers/api/attendance');

// CREATE attendance
router.post('/attendance', attendanceCtrl.create);
// READ all attendance
router.get('/attendance', attendanceCtrl.index);
// UPDATE attendance
router.put('/attendance/:id', attendanceCtrl.update);
// DELETE attendance
router.delete('/attendance/:id', attendanceCtrl.delete);

module.exports = router;
