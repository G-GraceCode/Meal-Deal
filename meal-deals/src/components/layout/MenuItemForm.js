"use client";
import ImageEdit from "@/components/layout/ImageEdit";
import ItemsPriceProps from "@/components/layout/ItemsPriceProps";
import { useState, useEffect } from "react";

export default function MenuItemForm({ handleForm, menuItems }) {
  const [image, setImage] = useState(menuItems?.image || "");
  const [name, setName] = useState(menuItems?.name || "");
  const [descript, setDescript] = useState(menuItems?.description || "");
  const [basePrice, setBasePrice] = useState(menuItems?.basePrice || "");
  const [sizes, setSizes] = useState(menuItems?.sizes || []);
  const [extraIngredients, setExtraIngredients] = useState(
    menuItems?.extraIngredients || [],
  );
  const [category, setCategory] = useState(menuItems?.category || "");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories").then((res) => {
      res.json().then((items) => {
        setCategories(items);
      });
    });
  }, []);

  return (
    <form
      className="mt-8 w-xl mx-auto"
      onSubmit={(e) =>
        handleForm(e, {
          image,
          name,
          description: descript,
          basePrice,
          sizes,
          extraIngredients,
          category,
        })
      }
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
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.length > 0 &&
              categories.map((cate) => (
                <option key={cate._id}>{cate.name}</option>
              ))}
          </select>
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

          <ItemsPriceProps
            name={"Sizes"}
            addLabel={"Add item sizeitem size"}
            props={sizes}
            setProps={setSizes}
          />
          <ItemsPriceProps
            name={"Extra ingredients"}
            addLabel={"Add item ingredient prices"}
            props={extraIngredients}
            setProps={setExtraIngredients}
          />
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
}
