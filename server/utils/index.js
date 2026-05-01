import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
     httpOnly: true,
    secure: false,      
    sameSite: "lax",
  });
};

export default createJWT;
