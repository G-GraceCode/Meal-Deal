"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Image } from "next/image";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const [userName, setUserName] = useState("");
  const session = useSession();
  const status = session.status;
  const userInfo = session.data?.user;
  const userImage = session.data?.user?.image;

  useEffect(() => {
    if (status === "authenticated,") {
      // setthe user name
      setUserName(userInfo?.name);
    }
  }, [session, status]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await fetch("/api/profile", {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ name: userName }),
    //   });
    // } catch (e) {
    //   alert(e.message);
    // }
  };

  if (status === "Loading") {
    return "Loading ...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl text-bold mb-4">
        Profile
      </h1>
      <div className="max-w-md mx-auto">
        <div className="bg-secondary-400 text-center text-fontSecondary">Profile Saved</div>

        <div className="border md:flex gap-3">
          <div>
            <div>
              {/* <Image
              src={userImage?.image}
              width={65}
              height={65}
              alt={"avater"}
            /> */}

              <button>Replace Avater</button>
            </div>
          </div>

          <form className="grow">
            <input
              type="text"
              placeholder="First Name and Last Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input type="email" placeholder="email" disabled={true} />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
