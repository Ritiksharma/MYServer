const express = require('express');
const users = require('../controller/userController');
const router = express.Router();


router.get('/users',users.handleUserList);

router.post('/', (req, res) => {
  const newUser = req.body;
  res.json({ message: 'User created', user: newUser });
});

module.exports = router;
