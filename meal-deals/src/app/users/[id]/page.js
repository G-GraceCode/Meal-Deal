"use client";
import { useEffect, useState } from "react";
import Usertabs from "@/components/layout/Usertabs";
import { userProfile } from "@/components/UserProfile";
import UserForm from "@/components/layout/UserForm";
import { useParams } from "next/navigation";

export default function EditUserPage() {
  const { loading: profileLoading, data: profileData } = userProfile();
  const [user, setUser] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch("/api/profile?_id=" + id).then((res) => {
      res.json().then((data) => {
        setUser(data);
      });
    });
  }, []);

    const handleUserUpdate = async (e, UserData) => {
    e.preventDefault();
    try {
      const savingPromise = new Promise(async (resolve, reject) => {
        const res = await fetch("/api/profile", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({_id: id, ...UserData}),
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

  if (profileLoading) {
    return <span className="text-center">Loading Info</span>;
  }

  if (!profileData.admin) {
    return <span className="text-center">Not An Admin</span>;
  }

  return (
    <section className="mt-8 max-w-xl mx-auto">
      <Usertabs isAdmin={true} />
      <div className="mt-4">
        <UserForm user={user} onSave={handleUserUpdate}/>
      </div>
    </section>
  );
}
