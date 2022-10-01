const express = require('express');
const fs = require('fs');
const usersController = require('./../controllers/usersController');


//Handling requests




const router = express.Router();

router.route('/').get(usersController.getAllUsers).post(usersController.addUser);
router.route('/:id').get(usersController.getUser).patch(usersController.updateUser).delete(usersController.deleteUser)

module.exports = router;