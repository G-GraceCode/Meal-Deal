import { models, Schema, model } from "mongoose";

const menuItemsSchema = new Schema(
  {
    name: { type: String },

    description: {
      type: String,
    },
    image: { type: String },
    basePrice: { type: String },
  },
  { timestamps: true },
);

const MenuItem = models?.MenuItem || model("MenuItem", menuItemsSchema);

export default MenuItem;
