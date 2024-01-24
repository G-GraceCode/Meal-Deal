"use client"
import Usertabs from "@/components/layout/Usertabs";

export default function CategoriesPage() {
  return (
    <section className="mt-8">
      <Usertabs isAdmin={true} />
      <h3> Categories</h3>
    </section>
  );
}
