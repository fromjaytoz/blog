import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add your name"],
      trim: true,
      maxlength: [20, "Your username can only be 20 characters long"],
    },
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
      default:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    },
    type: {
      type: String,
      default: "normal",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", user);
