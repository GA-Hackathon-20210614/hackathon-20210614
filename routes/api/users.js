const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/users/index
// showing for testing purposes

router.get('/index', usersCtrl.index);

// GET /api/users/:userId
router.get('/:id', usersCtrl.findOne);

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// PUT /api/users/:id/edit 
router.put("/:id/edit", ensureLoggedIn, usersCtrl.edit);

// POST /api/users
router.post('/', usersCtrl.create);

// POST /api/users/login
router.post('/login', usersCtrl.login);

// DELETE /api/users/:userId/delete
router.delete('/:id/delete', ensureLoggedIn, usersCtrl.remove);

module.exports = router;