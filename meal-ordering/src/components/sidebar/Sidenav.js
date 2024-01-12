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

export default function Sidenav() {
  return (
    <>
      <aside className="flex items-center flex-col bg-[#feeFcc]">
        <div>
          <Image
            src={"/logo1.svg"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"meal-logo"}
          />
        </div>
        <ul className="flex flex-col gap-2 text-gray-800 text-sm">
          <li className="flex flex-col items-center">
            <AiFillHome size={25} className="mb-2" /> <p>Home</p>
          </li>
          <li className="flex flex-col items-center">
            <IoSearchOutline size={25} className="mr-2" /> <p>Search</p>
          </li>
          <li className="flex flex-col items-center">
            <CgMenuGridO size={25} className="mr-2" /> <p>Menu</p>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 text-gray-800 text-sm">
          <li className="flex flex-col items-center">
            <TbTruckDelivery size={25} className="mb-2" /> <p>Orders</p>
          </li>
          <li className="flex flex-col items-center">
            <MdFavorite size={25} className="mr-2" /> Favorites
          </li>
          <li className="flex flex-col items-center">
            <FaWallet size={25} className="mr-2" /> <p>Wallet </p>
          </li>
          <li className="flex flex-col items-center">
            <MdHelp size={25} className="mb-2" /> <p>Help</p>
          </li>
          <li className="flex flex-col items-center">
            <AiFillTag size={25} className="mb-2" /> <p> Promotions</p>
          </li>
          <li className="flex flex-col items-center">
            <BsFillSaveFill size={25} className="mb-2" /> <p> Best Ones </p>
          </li>
          <li className="flex flex-col items-center">
            <FaUserFriends size={25} className="mb-2" /> Invite Friends
          </li>
        </ul>
      </aside>
    </>
  );
}
