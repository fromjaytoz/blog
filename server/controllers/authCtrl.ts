import { Request, Response } from "express";
import Users from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authCtrl = {
  register: async (req: Request, res: Response) => {
    try {
      const { name, account, password } = req.body;
      const user = await Users.findOne({ account });
      if (!user) {
        return res.status(500).json({ msg: "Email/Phone already exists!" });
      }
      const passwordHash = await bcrypt.hash(password, 12);
      res.json({ msg: "Register successfully" });

      const newUser = new Users({ name, account, password: passwordHash });
      res.json({ msg: "Registration successful!", data: newUser });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
