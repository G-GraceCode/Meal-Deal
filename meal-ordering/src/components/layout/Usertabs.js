import Link from "next/link";

export default function Usertabs({ isAdmin }) {
  return (
    <div className="flex gap-2 tabs items-center justify-center">
      <Link className="active" href={"/categories"}>
        Profile
      </Link>

      {isAdmin && (
        <>
          <Link href={"/categories"}>Categories</Link>
          <Link href={"/menu-items"}>Menu Items</Link>
          <Link href={"/users"}>Users</Link>
        </>
      )}
    </div>
  );
}
