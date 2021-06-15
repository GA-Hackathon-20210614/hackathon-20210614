const express = require('express');
const router = express.Router();
const attendanceCtrl = require('../../controllers/api/attendances');

// CREATE attendance
router.post('/create', attendanceCtrl.create);
// READ all attendance
router.get('/index', attendanceCtrl.index);

router.get('/today', attendanceCtrl.getDate);

// UPDATE attendance
router.put('/:id', attendanceCtrl.update);

// DELETE attendance
router.delete('/:id', attendanceCtrl.remove);

module.exports = router;