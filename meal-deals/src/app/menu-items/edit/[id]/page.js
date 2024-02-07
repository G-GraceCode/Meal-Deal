"use client";
import { userProfile } from "@/components/UserProfile";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import Usertabs from "@/components/layout/Usertabs";
import MenuItemForm from "@/components/layout/MenuItemForm";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function EditMenuItemsPage() {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState(null);
  const {loading, data} = userProfile();

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((items) => {
        const item = items.find((i) => i._id === id);
        setMenuItems(item);
      });
    });
  }, []);

  const handleFormSumbit = async (e, data) => {
    e.preventDefault();
    data = { ...data, _id: id };
    const savingPromise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/menu-items", {
        method: "PUT",
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

  const handleDeleteMenuItem = async () => {
    const savingPromise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/menu-items?_id=" + id, {
        method: "DELETE",
      });
      if (res.ok) resolve();
      else reject();
    });
    await toast.promise(savingPromise, {
      loading: "Deleting...",
      success: "Deleted",
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
      <Link
        href="/menu-items"
        className="text-left flex items-center justify-center gap-2"
      >
        <span>Go Back to All Menus</span>
      </Link>
      <MenuItemForm handleForm={handleFormSumbit} menuItems={menuItems} />
      <div className="max-w-md mx-auto mt-4">
        <div className="max-w-ms ml-auto pl-4">
          <button type="button" onClick={handleDeleteMenuItem}>
            Delete this project
          </button>
        </div>
      </div>
    </section>
  );
}
