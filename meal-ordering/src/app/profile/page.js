"use client";
import { useState, useEffect} from "react";
import { useSession } from "next-auth/react";
import { Image } from "next/image";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const session = useSession();
  console.log("session", session);
  // const status = session?.status;
  // const data = session?.data;
  // console.log("data", data);
  // const [userName, setUserName] = useState(data?.user?.name || "");
  // const userImage = data?.user;

  useEffect(() => {
    if(status === "authenticated,"){

    }
  }, [session])

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
      <div className="max-w-md mx-auto border md:flex gap-3">
        <div>
          <div>
            {/* <Image
              src={""}
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
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />
          <input type="email" placeholder="email" disabled={true} />
          <button type="submit">Save</button>
        </form>
      </div>
    </section>
  );
}
