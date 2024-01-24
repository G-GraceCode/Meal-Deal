"use client";
import Usertabs from "@/components/layout/Usertabs";
import { userProfile } from "@/components/UserProfile";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CategoriesPage() {
  const [newCategoryName, setNewCategoryName] = useState("");
  const { loading: profileLoading, data: profileData } = userProfile();
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => {
        setCategorys(categories);
      });
    });
  };

  const handleNewCategory = async (e) => {
    e.preventDefault();

    const creatingPromise = new Promise((resolve, reject) => {
      const res = fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategoryName }),
      });
      getNewCategory();
      if (res.ok) resolve();
      else reject();
    });
    await toast.promise(creatingPromise, {
      loading: "Creating New Category...",
      success: "Category Created",
      error: "Error, sorr...",
    });
  };

  if (profileLoading) {
    return <span className="text-center">Loading Info</span>;
  }

  if (!profileData.admin) {
    return <span className="text-center">Not An Admin</span>;
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <Usertabs isAdmin={true} />
      <form onSubmit={handleNewCategory} className="mt-8">
        <div className="flex items-center">
          <div className="grow">
            <label>New Cataegory Name</label>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
          </div>
          <button>Create</button>
        </div>
      </form>
      <div>
        {categorys.length > 0 &&
          categorys.map((item) => (
            <button>
              <span>{item.name}</span>
            </button>;
          ))}
      </div>
    </section>
  );
}
