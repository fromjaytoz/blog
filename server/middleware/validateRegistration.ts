import { NextFunction, Request, Response } from "express";

export const validateRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, account, password } = req.body;

  if (!name) {
    return res.status(400).json({ msg: "Please enter your name" });
  } else if (name.length > 20) {
    return res.status(400).json({
      msg: "Your username can only be 20 characters long",
    });
  }

  if (!account) {
    return res.status(400).json({ msg: "Please enter your email/phone" });
  } else if (!validateEmail(account) && !validatePhone(account)) {
    return res
      .status(400)
      .json({ msg: "Please enter a valid email/phone number" });
  }

  if (!password) {
    return res.status(400).json({ msg: "Please enter your password" });
  } else if (password.length < 6) {
    return res
      .status(400)
      .json({ msg: "Your password must be at least 6 characters " });
  }
  next();
};

const validatePhone = (phone: string) => {
  const re = /^[+]/g;
  return re.test(phone);
};

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
