"use client";
import { useEffect, useState } from "react";
import Usertabs from "@/components/layout/Usertabs";
import { userProfile } from "@/components/UserProfile";
import Link from "next/link";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const { loading: profileLoading, data: profileData } = userProfile();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("/api/users").then((res) => {
      res.json().then((user) => {
        setUsers(user);
      });
    });
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
      <div className="md:flex items-center gap-2 justify-center max-w-md mx-auto flex-col">
        {users.length > 0 &&
          users.map((user) => (
            <div
              key={user._id}
              className="flex items-center justify-between px-4 py-2 w-full mb-2 bg-gray-100 rounded-xl"
            >
              <div>
                <span className="font-bold">{user.name}</span>
                <span className="font-bold">{user.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <Link href={`/users/${user._id}`} className="button">
                  Edit
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
