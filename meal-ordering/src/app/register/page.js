"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setCreatingUser(true);
      setError(false);
      setUserCreated(false);

      const res = fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setUserCreated(true);
      } else {
        setError(true);
      }
    } catch (e) {
    } finally {
      setCreatingUser(false);
    }
  };
  return (
    <section className="mx-3 mt-8">
      <h2 className="text-center text-primary text-4xl mb-4 font-bold">
        {" "}
        Register{" "}
      </h2>
      {userCreated && (
        <div className="text-center mb-2 text-xl">
          Accounted Created,Login Now{" "}
          <Link className="underline" href={"/login"}>
            Login
          </Link>
        </div>
      )}
      {error && (
        <div className="text-center mb-2 text-xl">
          Sorry, an error Occured Try, Later
        </div>
      )}

      <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={creatingUser}
        />

        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center items-center">
          <FcGoogle size={25} /> Login with google
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
