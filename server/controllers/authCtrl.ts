import { Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authCtrl = {
  register: async (req: Request, res: Response) => {
    try {
      const { name, account, password } = req.body;
      const user = await User.findOne({ account });
      if (user)
        return res.status(400).json({ msg: "Email/Phone already exists!" });

      const passwordHash = await bcrypt.hash(password, 12);
      const newUser = new User({
        name,
        account,
        password: passwordHash,
      });
      newUser &&
        res.json({
          status: "OK",
          msg: "Registration was successful!",
          data: newUser,
        }) &&
        newUser.save();
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default authCtrl;
