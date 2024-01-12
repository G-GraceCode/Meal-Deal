import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 inset-x-0 bg-[#fefecc]">
      <div className="flex flex-row items-center justify-between">
        <Link href={"/"}>
          <img src={"/mealdeal.png"} className="w-20" />
        </Link>
        <div>
          <Link href={"/"}>Log in</Link>
          <Link href={"/"}>Register</Link>
        </div>
      </div>
    </nav>
  );
}
