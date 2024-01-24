import {userProfile} from "@/components/UserProfile";
import UserTabs form "@/components/layout/UserTabs";

export default function MenuItemsPage() {
    return(
        <section className="mt-8">
        <UserTabs isAdmin={true} />
        </section>
    )
}