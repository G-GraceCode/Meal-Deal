import { models, Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    validate: () => {
      if (password.length || password.length < 5) {
        throw new Error("Pass Word Must be Greater than 5");
        return false;
      }
    },
  },
});

const User = models?.User || model("User", userSchema);

export default User;
