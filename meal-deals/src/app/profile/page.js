"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Usertabs from "@/components/layout/Usertabs";
import ImageEdit from "@/components/layout/ImageEdit";
import UserForm from "@/components/layout/UserForm";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const session = useSession();
  const status = session.status;
  const userInfo = session.data?.user;
  const userImage = session.data?.user?.image;

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((res) => {
        res.json().then((data) => {
          setUser(data);
          setIsAdmin(data.admin);
        });
      });
    }
  }, [userInfo, status]);

  const handleProfileUpdate = async (e, UserData) => {
    e.preventDefault();
    try {
      const savingPromise = new Promise(async (resolve, reject) => {
        const res = await fetch("/api/profile", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(UserData),
        });
        if (res.ok) resolve();
        else reject();
      });

      await toast.promise(savingPromise, {
        loading: "Saving",
        success: "Profile Saved",
        error: "Profile Not Saved",
      });
    } catch (e) {
      toast.error(e.message);
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
      <Usertabs isAdmin={isAdmin} />
      <UserForm user={user} onSave={handleProfileUpdate} />
    </section>
  );
}
