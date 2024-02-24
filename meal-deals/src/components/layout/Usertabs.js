"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Category, Menu, Users, Order } from "@/components/icons/index";

export default function Usertabs({ isAdmin }) {
  const path = usePathname();
  return (
    <div className="flex gap-2 tabs items-center justify-center w-fit mx-auto bg-gray-300 rounded-full">
      <Link
        prefetch={false}
        className={`${path === "/profile" ? "active" : ""} flex items-center gap-2`}
        href="/profile"
      >
        <User size={19} /> Profile
      </Link>

      {isAdmin && (
        <>
          <Link
            prefetch={false}
            className={`${path === "/categories" ? "active" : ""} flex items-center gap-2`}
            href="/categories"
          >
            <Category size={20} /> Categories
          </Link>
          <Link
            prefetch={false}
            className={`${path.includes("/menu-items") ? "active" : ""} flex items-center gap-2`}
            href="/menu-items"
          >
            <Menu size={20} /> Menu
          </Link>
          <Link
            prefetch={false}
            className={`${path.includes("/users") ? "active" : ""} flex items-center gap-2`}
            href="/users"
          >
            <Users size={20} /> Users
          </Link>
          <Link
            prefetch={false}
            className={`${path.includes("/Orders") ? "active" : ""} flex items-center gap-2`}
            href="/Orders"
          >
            <Order size={20} /> Orders
          </Link>
        </>
      )}
    </div>
  );
}
