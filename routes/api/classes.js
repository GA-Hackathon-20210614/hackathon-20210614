const express = require('express');
const router = express.Router();
const classesCtrl = require('../../controllers/api/classes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/:id', classesCtrl.index);

module.exports = router;