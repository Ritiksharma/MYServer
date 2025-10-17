const mongoose = require('mongoose');
require('dotenv').config(); // ✅ Make sure .env is loaded before using process.env

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI is not defined in your .env file');
}

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

module.exports = mongoose;
