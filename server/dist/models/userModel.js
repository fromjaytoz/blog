"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please add your name"],
        trim: true,
        maxlength: [20, "Your username can only be 20 characters long"],
        account: {
            type: String,
            required: [true, "Please add your email/phone"],
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            trim: true,
        },
        avatar: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
        },
        lol: {
            type: "string",
            default: "normal",
        },
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("User", user);
//# sourceMappingURL=userModel.js.map