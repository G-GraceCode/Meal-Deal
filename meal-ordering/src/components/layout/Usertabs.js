"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Usertabs({ isAdmin }) {
  const path = usePathname();
  return (
    <div className="flex gap-2 tabs items-center justify-center w-fit mx-auto bg-gray-300 rounded-full">
      <Link className={path === "/profile" ? "active" : ""} href={"/profile"}>
        Profile
      </Link>

      {isAdmin && (
        <>
          <Link
            className={path === "/categories" ? "active" : ""}
            href={"/categories"}
          >
            Categories
          </Link>
          <Link
            className={path === "/menuitems" ? "active" : ""}
            href={"/menuitems"}
          >
            Menu Items
          </Link>
          <Link className={path === "/user" ? "active" : ""} href={"/users"}>
            Users
          </Link>
        </>
      )}
    </div>
  );
}
