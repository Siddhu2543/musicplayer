import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const setCors = (res) => {
  res.set("Access-Control-Allow-Origin", "*");
};

export const getUsers = asyncHandler(async (req, res) => {
  setCors(res);
  const users = await User.find({});
  res.json(users);
});

export const getUserById = asyncHandler(async (req, res) => {
  setCors(res);
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
    res.status(404);
    throw new Error("User not found");
  }
});
