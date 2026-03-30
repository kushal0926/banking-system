import { Schema } from "mongoose";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      lowercase: true,
      unique: true,
      trim: true,
      match: [emailRegex, "provide a valid email"],
    },
    name: {
      type: String,
      required: [true, "name is required for creating an account"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "password should be more than six character"],
      select: false,
    },
  },
  { timestamps: true },
);

export default userSchema;
