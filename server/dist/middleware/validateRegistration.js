"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegistration = void 0;
const validateRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, account, password } = req.body;
    if (!name) {
        res.status(400).json({ msg: "Please enter your name" });
    }
    else if (name.length > 20) {
        res.status(400).json({
            msg: "Your username can only be 20 characters long",
        });
    }
    if (!account) {
        res.status(400).json({ msg: "Please enter your email/phone" });
    }
    else if (!validateEmail(account) || !validatePhone(account)) {
        res.status(400).json({ msg: "Please enter a valid email/phone number" });
    }
    if (!password) {
        res.status(400).json({ msg: "Please enter your password" });
    }
    else if (password.length > 6) {
        res
            .status(400)
            .json({ msg: "Your password must be at least 6 characters " });
    }
    next();
});
exports.validateRegistration = validateRegistration;
const validatePhone = (phone) => {
    const re = /^[+]/g;
    return re.test(phone);
};
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
//# sourceMappingURL=validateRegistration.js.map