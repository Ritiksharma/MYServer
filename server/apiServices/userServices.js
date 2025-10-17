const User = require('../models/user'); // adjust path to your model

const getUserList = async (res) => {
  try {
    const userList = await User.find().lean(); // fetch all users from MongoDB
    return  {"status": 200, "data": userList }; // send list to client
  } catch (error) {
    console.error('Error fetching user list:', error);
    return {"status": 400, "data": []}
  }
};

module.exports = {
  getUserList,
};