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
      <aside className="sticky top-0 flex items-center flex-col justify-start bg-[#feeFcc]">
        <div className="relative bg-[#000] w-full h-16">
          <Image
            src={"/3.svg"}
            width={300}
            height={300}
            // layout={"fill"}
            // objectFit={"contain"}
            alt={"meal-logo"}
            className="absolute inset-x-0 top-0 w-70"
          />
        </div>
        <ul
          className="w-full flex flex-col items-center justify-center py-4 gap-2 text-gray-800 text-sm mt-6"
          style={{ borderBottom: "2px double #000" }}
        >
          <li className="flex flex-col items-center">
            <AiFillHome size={25} className="mb-2" /> <p>Home</p>
          </li>
          <li className="flex flex-col items-center">
            <IoSearchOutline size={25} className="mb-2" /> <p>Search</p>
          </li>
          <li className="flex flex-col items-center">
            <CgMenuGridO size={25} className="mb-2" /> <p>Menu</p>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 py-4 text-gray-800 text-sm">
          <li className="flex flex-col items-center">
            <TbTruckDelivery size={25} className="mb-2" /> <p>Orders</p>
          </li>
          <li className="flex flex-col items-center">
            <MdFavorite size={25} className="mr-2" /> Favorites
          </li>
          {/* <li className="flex flex-col items-center">
            <FaWallet size={25} className="mr-2" /> <p>Wallet </p>
          </li> */}
          <li className="flex flex-col items-center">
            <AiFillTag size={25} className="mb-2" /> <p> Promo's</p>
          </li>
          <li className="flex flex-col items-center">
            <BsFillSaveFill size={25} className="mb-2" /> <p> Best Ones </p>
          </li>
          {/* <li className="flex flex-col items-center">
            <FaUserFriends size={25} className="mb-2" /> Invite Friends
          </li> */}
        </ul>

        <div className="absolute mx-auto inset-x-0 bottom-6 flex items-center flex-col">
          <IoIosSunny size={25} />
        </div>
      </aside>
    </>
  );
}
