"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="mx-3 mt-8">
      <h2 className="text-center text-primary text-4xl mb-8 font-bold">
        {" "}
        Login{" "}
      </h2>
      <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center items-center">
          <FcGoogle size={25} /> Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Don't have an account?{" "}
          <Link className="underline" href={"/login"}>
            Register here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
