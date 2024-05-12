import User from "../models/user.model.js";

export const signup = async (req, res, next) => {
  try {
    const { fullName, username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      throw new Error("User Already Exist.");
    }

    const newUser = await User.create({
      fullName,
      username,
      password,
    });

    res.json({ user: newUser });
  } catch (error) {
    next(error);
  }
};