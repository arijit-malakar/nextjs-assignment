import Users from "../../../models/Users";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    try {
      let user = await Users.findOne({ email: req.body.email });
      if (Object.keys(user) !== 0) {
        // Match password
        if (user.password === req.body.password) {
          res.status(200).json(user);
        } else {
          res.status(400).json({ message: "Invalid Password" });
        }
      } else {
        res.status(400).json({ message: "User Not Found" });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "Method not allowed." });
  }
};

export default connectDb(handler);
