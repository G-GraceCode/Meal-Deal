"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";

export default function Navbar({ close }) {
  const session = useSession();
  console.log("user", session);
  const status = session.status;
  const userInfo = session.data?.user;
  let currentUser = userInfo?.name || userInfo?.email;
  if (userInfo && currentUser.includes(" ")) {
    currentUser = currentUser.split(" ")[0];
  }

  return (
    <nav className="sticky top-0 inset-x-0 bg-[#fefecc]">
      <div className="flex flex-row items-center justify-between p-2">
        <div className="flex items-center gap-3">
          <RiMenuUnfoldFill size={25} onClick={close} />
          <Link
            href={"/"}
            className="font-semibold text-2xl no-underline text-secondary"
          >
            Meal<span className="text-primary ml-2">Deal</span>
          </Link>
        </div>
        <div>
          {status === "authenticated" && (
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center gap-2">
                <IoIosNotifications size={25} />
                <Link
                  href={"/profile"}
                  className="no-underline flex items-center mr-2"
                  title="Your Profile"
                >
                  <span className="w-8 h-8 mr-px rounded-full bg-primary flex items-center justify-center text-sm text-fontSecondary">
                    {currentUser[0]}
                  </span>
                  {currentUser}
                </Link>
              </div>
              <button
                onClick={() => signOut()}
                className="py-2 px-6 rounded-full text-xs border-none bg-primary text-fontSecondary mr-3 no-underline"
              >
                Log Out
              </button>
            </div>
          )}
          {status === "unauthenticated" && (
            <>
              <Link
                href={"/login"}
                className="py-2 px-6 rounded-full border border-[#000] border-solid text-[#000] mr-3 no-underline"
              >
                Log in
              </Link>
              <Link
                href={"/register"}
                className="py-2 px-6 rounded-full bg-[#000] text-[#fff] no-underline"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
