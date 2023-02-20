const express = require('express');

const User = require('./controllers/user.controller');
const Task = require('./controllers/task.controller');
const UserValidation = require('./middlewares/validateNewUser');

const router = express.Router();

router.post('/', User.findEmail);
router.post('/user', UserValidation, User.createUser);
router.get('/tasks/:id', Task.findTasks);
router.post('/tasks/:id', Task.createTask);
router.delete('/tasks/:id', Task.deleteTask);
router.put('/tasks/:id', Task.updateTask);

module.exports = router;