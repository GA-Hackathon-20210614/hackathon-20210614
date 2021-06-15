const express = require('express');
const router = express.Router();
const classesCtrl = require('../../controllers/api/classes');

// CREATE assignments
router.post('/classes', classesCtrl.create);
// READ all assignments
router.get('/classes', classesCtrl.index);
// UPDATE assignment
router.put('/classes/:id', classesCtrl.update);
// DELETE assignments
router.delete('/classes/:id', classesCtrl.delete);

module.exports = router;
