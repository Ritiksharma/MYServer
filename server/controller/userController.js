const { getUserList } = require("../apiServices/userServices");

exports.handleUserList = async (req, res) => {
  try {
    const input = await getUserList(req.body);

    if (input.status === 200) {
      res.status(200).json(input);
    } else {
      res.status(400).json({ message: 'Failed to fetch user list' });
    }
  } catch (error) {
    console.error("API response error (users):", error);
    res.status(500).json({ message: "Server Error" });
  }
};
