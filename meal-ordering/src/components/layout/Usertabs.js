"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserFriends, FaWallet, FaUsers, FaUser } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";

export default function Usertabs({ isAdmin }) {
  const path = usePathname();
  return (
    <div className="flex gap-2 tabs items-center justify-center w-fit mx-auto bg-gray-300 rounded-full">
      <Link
        className={`${path === "/profile" ? "active" : ""} flex items-center gap-2`}
        href={"/profile"}
      >
        <FaUser size={19} /> Profile
      </Link>

      {isAdmin && (
        <>
          <Link
            className={`${path === "/categories" ? "active" : ""} flex items-center gap-2`}
            href={"/categories"}
          >
            <BiSolidCategoryAlt size={20} /> Categories
          </Link>
          <Link
            className={`${path === "/menu-items" ? "active" : ""} flex items-center gap-2`}
            href={"/menuitems"}
          >
            <CgMenuGridO size={20} /> Menu Items
          </Link>
          <Link
            className={`${path === "/user" ? "active" : ""} flex items-center gap-2`}
            href={"/users"}
          >
            <FaUsers size={20} /> Users
          </Link>
        </>
      )}
    </div>
  );
}
