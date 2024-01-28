"use client";
import { userProfile } from "@/components/UserProfile";
import toast from "react-hot-toast";
import { useState } from "react";
import Usertabs from "@/components/layout/Usertabs";
import ImageEdit from "@/components/layout/ImageEdit";
import { IoChevronBack } from "react-icons/io5";

export default function NewMenuItemsPage() {
  const { loading, data } = userProfile();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [descript, setDescript] = useState("");
  const [basePrice, setBasePrice] = useState("");

  const handleFormSumbit = async (e, data) => {
    e.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/menu-items", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) resolve();
      else reject();
    });
    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Saved",
      error: "Error",
    });
  };

  if (loading) {
    return "Loading User Info...";
  }
  if (!data.admin) {
    return "Not an Admin";
  }
  return (
    <section className="mt-8">
      <Usertabs isAdmin={true} />
      <div className="text-left flex items-center justify-center gap-2">
        <IoChevronBack size={20} /> <span>Go Back to All Menus</span>
      </div>
      <form className="mt-8 max-w-md mx-auto" onSubmit={handleFormSumbit}>
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
    </section>
  );
}
