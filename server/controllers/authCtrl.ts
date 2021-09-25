import { Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateActiveToken } from "../config/generateTokens";

const authCtrl = {
  register: async (req: Request, res: Response) => {
    try {
      const { name, account, password } = req.body;
      const user = await User.findOne({ account });

      if (user)
        return res.status(400).json({ msg: "Email/Phone already exists!" });

      const passwordHash = await bcrypt.hash(password, 12);
      const newUser = { name, account, password: passwordHash };
      const active_token = generateActiveToken({
        name: newUser.name,
        account: newUser.account,
        password: newUser.password,
      });

      if (new User(newUser).save()) {
        res.json({
          status: "OK",
          msg: "Registration was successful!",
          data: newUser,
          active_token,
        });
      }
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default authCtrl;
