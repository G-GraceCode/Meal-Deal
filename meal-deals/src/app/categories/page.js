// "use client";
// import Usertabs from "@/components/layout/Usertabs";
// import { userProfile } from "@/components/UserProfile";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { IoClose } from "react-icons/io5";

// export default function CategoriesPage() {
//   const [CategoryName, setCategoryName] = useState("");
//   const { loading: profileLoading, data: profileData } = userProfile();
//   const [categorys, setCategorys] = useState([]);
//   const [editCategory, setEditCategory] = useState(null);

//   useEffect(() => {
//     getCategory();
//   }, []);

//   const getCategory = () => {
//     fetch("/api/categories").then((res) => {
//       res.json().then((categories) => {
//         setCategorys(categories);
//       });
//     });
//   };

//   const handleNewCategory = async (e) => {
//     e.preventDefault();

//     const creatingPromise = new Promise(async (resolve, reject) => {
//       const data = { name: CategoryName };

//       if (editCategory) {
//         data._id = editCategory._id;
//       }

//       const res = await fetch("/api/categories", {
//         method: editCategory ? "PUT" : "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//       setCategoryName("");
//       getCategory();
//       setEditCategory(null);
//       if (res.ok) resolve();
//       else reject();
//     });
//     await toast.promise(creatingPromise, {
//       loading: editCategory
//         ? "Updating Category.."
//         : "Creating New Category...",
//       success: editCategory ? "Category Updated" : "Category Created",
//       error: "Error, sorr...",
//     });
//   };

//   if (profileLoading) {
//     return <span className="text-center">Loading Info</span>;
//   }

//   if (!profileData.admin) {
//     return <span className="text-center">Not An Admin</span>;
//   }

//   return (
//     <section className="mt-8 max-w-2xl mx-auto">
//       <Usertabs isAdmin={true} />
//       <form onSubmit={handleNewCategory} className="mt-8">
//         <div className="flex items-center">
//           <div className="grow">
//             <label>
//               {editCategory ? "Update Category" : "New Cataegory Name"}
//               {editCategory && (
//                 <>
//                   : <b>{editCategory.name}</b>
//                 </>
//               )}
//             </label>
//             <input
//               type="text"
//               value={CategoryName}
//               onChange={(e) => setCategoryName(e.target.value)}
//             />
//           </div>
//           <button className="bg-primary text-fontSecondary w-fit">
//             {editCategory ? "Update" : "Create"}
//           </button>
//         </div>
//       </form>
//       <div>
//         <div className="md:flex items-center gap-2 justify-center max-w-xs mx-auto">
//           {categorys.length > 0 &&
//             categorys.map((item) => (
//               <button
//                 key={item._id}
//                 className="flex items-center justify-between px-4"
//                 onClick={() => {
//                   setEditCategory(item);
//                   setCategoryName(item.name);
//                 }}
//               >
//                 <span>{item.name}</span>
//                 <IoClose />
//               </button>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }
