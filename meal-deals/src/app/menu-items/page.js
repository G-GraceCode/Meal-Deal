"use client";
import { useEffect, useState } from "react";
import { userProfile } from "@/components/UserProfile";
import Usertabs from "@/components/layout/Usertabs";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function MenuItemsPage() {
  const { loading, data } = userProfile();

  const [items, setIsItems] = useState([]);

  useEffect(() => {
    getMenuItems();
  }, []);

  const getMenuItems = async () => {
    const res = await fetch("/api/menu-items");
    if (res.ok) {
      res.json().then((data) => {
        setIsItems(data);
      });
    }
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
      <div className="mt-8 text-center">
        <Link
          href={"/menu-items/new"}
          prefetch={false}
          className="no-underline text-center text-gray-500 flex items-center justify-center"
        >
          Create New Menu Item <IoChevronForwardOutline size={20} />
        </Link>
      </div>
      <div>
        {items.length > 0 && items.map((item) => <div>{item.name}</div>)}
      </div>
    </section>
  );
}
