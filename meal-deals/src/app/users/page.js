import Usertabs from "@/components/layout/Usertabs";

export default function UserPage() {
  return (
    <section>
      <Usertabs isAdmin={true} />
      <div>Users</div>
    </section>
  );
}
