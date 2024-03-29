import { models, Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass.length < 5) {
          new Error("Pass Word Must be Atleast 5 characters");
        }
      },
    },
    image: {type: String}
  },
  { timestamps: true },
);

const User = models?.User || model("User", userSchema);

export default User;
