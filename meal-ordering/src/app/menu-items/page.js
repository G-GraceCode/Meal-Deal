"use client";
import { useState } from "react";
import { userProfile } from "@/components/UserProfile";
import Usertabs from "@/components/layout/Usertabs";
import ImageEdit from "@/components/layout/ImageEdit";

export default function MenuItemsPage() {
  const [image, setImage] = useState("");

  return (
    <section className="mt-8">
      <Usertabs isAdmin={true} />
      <form className="mt-8 max-w-md mx-auto">
        <div
          className="grid items-start gap4"
          style={{ gridTemplateColumn: ".3fr .7fr" }}
        >
          <div>
            <ImageEdit link={image} setLink={setImage} />
          </div>

          <div className="grow">
            <label>Item Name</label>
            <input type="text" placeholder="Item Name" />
            <label>Description</label>
            <input type="text" placeholder="Item Name" />
            <label>Price</label>
            <input type="text" placeholder="Item Name" />
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
}
