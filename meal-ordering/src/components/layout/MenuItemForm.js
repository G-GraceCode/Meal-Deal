"use client";
import { useState, useEffect } from "react";
import ImageEdit from "@/components/layout/ImageEdit";

export default function MenuItemForm({ handeForm, menuItems }) {
  const [image, setImage] = useState(menuItems?.image || "");
  const [name, setName] = useState(menuItems?.name || "");
  const [descript, setDescript] = useState(menuItems?.description || "");
  const [basePrice, setBasePrice] = useState(menuItems?.basePrice || "");

  return (
    <form
      className="mt-8 max-w-md mx-auto"
      onSubmit={(e) => handleForm(e, { image, name, descript, basePrice })}
    >
      <div
        className="grid items-start gap-4"
        style={{ gridTemplateColumns: ".3fr .7fr" }}
      >
        <div>
          <ImageEdit link={image} setLink={setImage} />
        </div>

        <div className="grow">
          <label>Item Name</label>
          <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            value={descript}
            onChange={(e) => setDescript(e.target.value)}
          />
          <label>Price</label>
          <input
            type="text"
            placeholder="Base Price"
            value={basePrice}
            onChange={(e) => setBasePrice(e.target.value)}
          />
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
}
