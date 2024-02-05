import { models, Schema, model } from "mongoose";

const ExtrapricesSchema = new Schema({
  name: String,
  price: Number,
});

const menuItemsSchema = new Schema(
  {
    name: { type: String },

    description: {
      type: String,
    },
    image: { type: String },
    basePrice: { type: String },

    sizes: {
      type: [ExtrapricesSchema],
    },
    extraIngredients: {
      type: [ExtrapricesSchema],
    },
  },
  { timestamps: true },
);

const MenuItem = models?.MenuItem || model("MenuItem", menuItemsSchema);

export default MenuItem;
