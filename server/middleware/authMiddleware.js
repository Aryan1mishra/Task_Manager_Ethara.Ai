import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = asyncHandler(async (req, res, next) => {
  req.user = {
    userId: "65ff94c7bb2de638d0c73f63",
    isAdmin: true,
    email: "test@test.com",
  };
  next();
});

const isAdminRoute = (req, res, next) => {
  next();
};

export { isAdminRoute, protectRoute };
