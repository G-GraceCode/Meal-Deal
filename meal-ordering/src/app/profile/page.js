"use client";
import { useSession } from "next-auth/react";
import { Image } from "next/image";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const session = useSession();
  const { status } = session;
  const userImage = session.data?.user;
  if (status === "Loading") {
    return "Loading ...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (
    <section className="mb-8">
      <h1 className="text-center text-primary text-4xl mb-4">profile</h1>
      <form className="max-w-md mx-auto border">
        <div>
          <Image src={} width={65} height={65} alt={"avater"} />
        </div>
      </form>
    </section>
  );
}
