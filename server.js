require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./config/mongos');
const app = express();
app.use(cors()); // allow access from React Native
app.use(express.json()); // parse JSON body

const PORT = process.env.PORT || 5000;

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Import routes
const userRoutes = require('./server/routers/userRoutes');
app.use('/api/', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
