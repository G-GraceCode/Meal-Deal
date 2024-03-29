"use client";
import Usertabs from "@/components/layout/Usertabs";
import { userProfile } from "@/components/UserProfile";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DeleteButton from "@/components/layout/DeleteButton";
import { Edit, Close } from "@/components/icons";

export default function CategoriesPage() {
  const [CategoryName, setCategoryName] = useState("");
  //   const { loading: profileLoading, data: profileData } = userProfile();
  const [categorys, setCategorys] = useState([]);
  const [editCategory, setEditCategory] = useState(null);

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

    const creatingPromise = new Promise(async (resolve, reject) => {
      const data = { name: CategoryName };

      if (editCategory) {
        data._id = editCategory._id;
      }

      const res = await fetch("/api/categories", {
        method: editCategory ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setCategoryName("");
      getCategory();
      setEditCategory(null);
      if (res.ok) resolve();
      else reject();
    });
    await toast.promise(creatingPromise, {
      loading: editCategory
        ? "Updating Category.."
        : "Creating New Category...",
      success: editCategory ? "Category Updated" : "Category Created",
      error: "Error, sorr...",
    });
  };

  const deleteCategory = async (_id) => {
    const deletingPromise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/categories?_id=" + _id, {
        method: "DELETE",
      });
      if (res.ok) resolve();
      else reject();
    });

    await toast.promise(deletingPromise, {
      loading: "Deleting Category...",
      success: "Category Deleted",
      error: "Error, sorr...",
    });

    getCategory();
  };
  //   if (profileLoading) {
  //     return <span className="text-center">Loading Info</span>;
  //   }

  //   if (!profileData.admin) {
  //     return <span className="text-center">Not An Admin</span>;
  //   }

  return (
    <section className="mt-8 max-w-xl mx-auto">
      <Usertabs isAdmin={true} />
      <form onSubmit={handleNewCategory} className="mt-8">
        <div className="flex items-center">
          <div className="grow">
            <label>
              {editCategory ? "Update Category" : "New Cataegory Name"}
              {editCategory && (
                <>
                  : <b>{editCategory.name}</b>
                </>
              )}
            </label>
            <input
              type="text"
              value={CategoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-primary text-fontSecondary w-fit">
            {editCategory ? "Update" : "Create"}
          </button>
          {editCategory && (
            <button
              className="border-2 border-primary text-primary bg-gray-100 w-fit"
              type="button"
              onClick={() => {
                setEditCategory(null);
                setCategoryName("");
              }}
            >
              Cancle
            </button>
          )}
        </div>
      </form>
      <div>
        <div className="md:flex items-center gap-2 justify-center max-w-md mx-auto flex-col">
          {categorys.length > 0 &&
            categorys.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between px-4 py-2 w-full mb-2 bg-gray-200 rounded-xl"
              >
                <span className="font-bold">{item.name}</span>

                <div className="flex items-center gap-2">
                  <span
                    className="flex items-center cursor-pointer justify-center bg-secondary text-fontSecondary rounded-full w-6 h-6"
                    onClick={() => {
                      setEditCategory(item);
                      setCategoryName(item.name);
                    }}
                  >
                    <Edit />
                  </span>
                  <DeleteButton
                    label="Delete"
                    onDelete={() => deleteCategory(item._id)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
