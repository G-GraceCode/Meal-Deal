"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { RiMenuUnfoldFill } from "react-icons/ri";

export default function Navbar() {
  const session = useSession();
  console.log("user", session);
  const status = session.status;
  return (
    <nav className="sticky top-0 inset-x-0 bg-[#fefecc]">
      <div className="flex flex-row items-center justify-between p-2">
        <div className="flex items-center gap-3">
          <RiMenuUnfoldFill size={25} />
          <Link
            href={"/"}
            className="font-semibold text-2xl no-underline text-secondary"
          >
            Meal<span className="text-primary ml-2">Deal</span>
          </Link>
        </div>
        <div>
          {status === "authenticated" && (
            <button
              onClick={() => signOut()}
              className="py-2 px-6 rounded-full text-xs border-none bg-primary text-[#000] mr-3 no-underline"
            >
              Log Out
            </button>
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
