"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authCtrl_1 = __importDefault(require("../controllers/authCtrl"));
const validateRegistration_1 = require("../middleware/validateRegistration");
const router = express_1.default.Router();
router.post("/register", validateRegistration_1.validateRegistration, authCtrl_1.default.register);
exports.default = router;
//# sourceMappingURL=authRouter.js.map