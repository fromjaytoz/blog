import express from "express";
import authCtrl from "../controllers/authCtrl";
import { validateRegistration } from "../middleware/validateRegistration";

const router = express.Router();

router.post("/register", validateRegistration, authCtrl.register);

export default router;
