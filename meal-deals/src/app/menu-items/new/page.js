"use client";
import { userProfile } from "@/components/UserProfile";
import toast from "react-hot-toast";
import Link from "next/link";
import { useState } from "react";
import Usertabs from "@/components/layout/Usertabs";
import ImageEdit from "@/components/layout/ImageEdit";
import MenuItemForm from "@/components/layout/MenuItemForm";
import { IoChevronBack } from "react-icons/io5";

export default function NewMenuItemsPage() {
  const { loading, data } = userProfile();

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
      <Link
        href="/menu-items"
        className="text-left flex items-center justify-center gap-2 mmt-4"
      >
        <IoChevronBack size={20} /> <span>Go Back to All Menus</span>
      </Link>
      <MenuItemForm
        className="mt-8 max-w-md mx-auto"
        onSubmit={handleFormSumbit}
      />
    </section>
  );
}
