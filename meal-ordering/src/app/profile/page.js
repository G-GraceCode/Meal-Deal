"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const [userName, setUserName] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [profileSave, setProfileSave] = useState(false);

  const session = useSession();
  const status = session.status;
  const userInfo = session.data?.user;
  const userImage = session.data?.user?.image;

  useEffect(() => {
    if (status === "authenticated") {
      // setthe user name
      setUserName(userInfo?.name);
    }
  }, [session, status]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName }),
      });
      if (res.ok) {
        setIsSaving(false);
        setProfileSave(true);
      }
    } catch (e) {
      alert(e.message);
    } finally {
      setTimeout(() => {
        setProfileSave(false);
      }, 6000);
    }
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
        {profileSave && (
          <div className="bg-green-200 text-center py-2 border border-solid border-green-300 my-2 rounded-sm">
            Profile Saved
          </div>
        )}

        {isSaving && (
          <div className="bg-blue-200 text-center py-2 border border-solid border-blue-300 my-2 rounded-sm">
            Saving ...
          </div>
        )}

        <div className="md:flex gap-3">
          <div>
            <div className="p-2 relative">
              <Image
                src={userImage}
                width={65}
                height={65}
                alt={"avater"}
                className="rounded-full mb-1"
              />

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
            <input
              type="email"
              placeholder="email"
              disabled={true}
              value={userInfo?.email}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
