import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 inset-x-0 bg-[#fefecc]">
      <div className="flex flex-row items-center justify-between p-2">
        <Link href={"/"} className="font-semibold text-2xl">
          Meal<span>Deal</span>
        </Link>
        <div>
          <Link
            href={"/"}
            className="py-2 px-6 rounded-2xl border border-[#000] border-solid text-[#000] mr-3 no-underline"
          >
            Log in
          </Link>
          <Link
            href={"/"}
            className="py-2 px-6 rounded-2xl bg-[#000] text-[#fff] no-underline"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
