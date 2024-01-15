"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="mx-3 mt-8">
      <h2 className="text-center text-primary text-4xl mb-8 font-bold">
        {" "}
        Register{" "}
      </h2>
      <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center items-center">
          <FcGoogle /> Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{" "}
          <Link className="underline" href={"/login"}>
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
