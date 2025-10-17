const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Ritik Sharma' },
    { id: 2, name: 'John Doe' }
  ]);
});

router.post('/', (req, res) => {
  const newUser = req.body;
  res.json({ message: 'User created', user: newUser });
});

module.exports = router;
