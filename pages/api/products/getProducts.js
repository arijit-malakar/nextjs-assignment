import Products from "../../../models/Products";
import connectDb from "../../../middleware/mongoose";

// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
//   }

// GET call to fetch some data
const handler = async (req, res) => {
  const data = await Products.find();
  res.status(200).json(data);
};

export default connectDb(handler);
