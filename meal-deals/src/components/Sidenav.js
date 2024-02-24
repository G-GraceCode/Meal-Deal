"use client";
import Image from "next/image";
import { Home, Search, Menu, Light, Favorite } from "@/components/icons/index";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidenav() {
  const path = usePathname();

  return (
    <aside className="flex items-center flex-col justify-start bg-[#feeFcc] sideBar">
      <div className="relative bg-secondary w-full h-12 flex items-center justify-center">
        <Image
          src={"/logo1.svg"}
          width={100}
          height={100}
          // layout={"fill"}
          // objectFit={"contain"}
          alt={"meal-logo"}
          className="absolute inset-y-0 w-10 mx-auto mt-1"
        />
      </div>
      <ul
        className="w-full flex flex-col items-center justify-center py-4 gap-1 text-gray-800 text-xs font-medium mt-6 nav_list"
        style={{ borderBottom: "2px double #000" }}
      >
        <li className={`${path === "/" ? "active" : ""}`}>
          <Link
            href={"/"}
            className={`flex flex-col items-center no-underline`}
          >
            <Home size={22} className="mb-2" /> <p>Home</p>
          </Link>
        </li>
        <li className={`${path === "/search" ? "active" : ""}`}>
          <Link
            className={`flex flex-col items-center no-underline`}
            href={"/search"}
          >
            <Search size={22} className="mb-2" /> <p>Search</p>
          </Link>
        </li>
        <li className={`${path === "/menu" ? "active" : ""}`}>
          <Link
            className={`flex flex-col items-center no-underline`}
            href={"/menu"}
          >
            <Menu size={22} className="mb-2" /> <p>Menu</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex flex-col items-center no-underline"
            href={"/favorite"}
          >
            <Favorite size={22} className="mb-2" /> <p> Favorites</p>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-1 py-4 text-gray-800 text-xs font-medium nav_list">
        <li className="flex flex-col items-center">
          <p>Admin</p>
        </li>
        {/* <li className="flex flex-col items-center">
            <TbTruckDelivery size={22} className="mb-2" /> <p>Orders</p>
          </li>
          <li className="flex flex-col items-center">
            <FaUsers size={22} className="mb-2" /> <p>Users</p>
          </li> */}
        {/* <li className="flex flex-col items-center">
            <FaWallet size={22} className="mr-2" /> <p>Wallet </p>
          </li> */}
        {/* <li className="flex flex-col items-center">
            <AiFillTag size={22} className="mb-2" /> <p> Promo's</p>
          </li>
          <li className="flex flex-col items-center">
            <BsFillSaveFill size={22} className="mb-2" /> <p> Best Ones </p>
          </li> */}
        {/* <li className="flex flex-col items-center">
            <FaUserFriends size={22} className="mb-2" /> Invite Friends
          </li> */}
      </ul>

      <div className="absolute mx-auto inset-x-0 bottom-6 flex items-center flex-col">
        <Light size={22} />
      </div>
    </aside>
  );
}
