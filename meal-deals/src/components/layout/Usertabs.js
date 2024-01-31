"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUsers, FaUser } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { User, Category, Menu, Users } from "@/components/icons/index";

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
            <Menu size={20} /> Menu Items
          </Link>
          <Link
            prefetch={false}
            className={`${path === "/user" ? "active" : ""} flex items-center gap-2`}
            href="/users"
          >
            <Users size={20} /> Users
          </Link>
        </>
      )}
    </div>
  );
}
