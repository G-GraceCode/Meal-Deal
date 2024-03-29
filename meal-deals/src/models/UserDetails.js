import { models, Schema, model } from "mongoose";

const userDetailSchema = new Schema(
  {
    email: { type: String, required: true },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    phone: { type: String },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const UserDetail =
  models?.UserDetail || model("UserDetail", userDetailSchema);
