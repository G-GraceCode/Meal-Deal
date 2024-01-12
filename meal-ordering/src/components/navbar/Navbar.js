import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <div>
      <Link>
      <img src={"/2.svg"} />
      </Link>
      <div>
        <Link to="">Log in</Link>
        <Link to="">Register</Link>
      </div>
      </div>
    </nav>
  );
}
