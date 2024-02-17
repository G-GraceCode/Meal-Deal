"use client";
import { useEffect, useState } from "react";
import { userProfile } from "@/components/UserProfile";
import Usertabs from "@/components/layout/Usertabs";
import Link from "next/link";
import Image from "next/image";

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
    <section className="mt-8 max-w-xl mx-auto">
      <Usertabs isAdmin={true} />
      <div className="mt-8 text-center">
        <Link
          href={"/menu-items/new"}
          prefetch={false}
          className="no-underline text-center text-gray-500 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 border-solid bg-gray-200"
        >
          Create New Menu Item
        </Link>
      </div>
      <div>
        <h2 className="text-sm mt-8">Edit Menu Items:</h2>
        <div clasName="grid grid-cols-3 gap-4">
          {items.length > 0 &&
            items.map((item) => (
              <div>
                <Link
                  href={`/menu-items/edit/${item._id}`}
                  key={item._id}
                  className="text-center cursor-pointer rounded-lg bg-gray-200"
                >
                  <div className="relative">
                    {item.image ? (
                      <Image
                        className="rounded-md"
                        src={item.image}
                        alt={""}
                        width={200}
                        height={200}
                      />
                    ) : (
                      <span>{item?.name[0]}</span>
                    )}
                  </div>
                  <div className="text-center">{item.name}</div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
