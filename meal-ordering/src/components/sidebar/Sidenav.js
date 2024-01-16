import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
  AiFillHome,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import Image from "next/image";
import { IoIosSunny } from "react-icons/io";

export default function Sidenav() {
  return (
    <>
      <aside className="sticky top-0 flex items-center flex-col justify-start bg-[#feeFcc] sideBar">
        <div className="relative bg-secondary w-full h-12 flex items-center justify-center">
          <Image
            src={"/meal.png"}
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
          <li className="flex flex-col items-center active">
            <AiFillHome size={22} className="mb-2" /> <p>Home</p>
          </li>
          <li className="flex flex-col items-center">
            <IoSearchOutline size={22} className="mb-2" /> <p>Search</p>
          </li>
          <li className="flex flex-col items-center">
            <CgMenuGridO size={22} className="mb-2" /> <p>Menu</p>
          </li>
        </ul>
        <ul className="flex flex-col gap-1 py-4 text-gray-800 text-xs font-medium nav_list">
          <li className="flex flex-col items-center">
            <TbTruckDelivery size={22} className="mb-2" /> <p>Orders</p>
          </li>
          <li className="flex flex-col items-center">
            <MdFavorite size={22} className="mb-2" /> Favorites
          </li>
          {/* <li className="flex flex-col items-center">
            <FaWallet size={22} className="mr-2" /> <p>Wallet </p>
          </li> */}
          <li className="flex flex-col items-center">
            <AiFillTag size={22} className="mb-2" /> <p> Promo's</p>
          </li>
          <li className="flex flex-col items-center">
            <BsFillSaveFill size={22} className="mb-2" /> <p> Best Ones </p>
          </li>
          {/* <li className="flex flex-col items-center">
            <FaUserFriends size={22} className="mb-2" /> Invite Friends
          </li> */}
        </ul>

        <div className="absolute mx-auto inset-x-0 bottom-6 flex items-center flex-col">
          <IoIosSunny size={22} />
        </div>
      </aside>
    </>
  );
}
