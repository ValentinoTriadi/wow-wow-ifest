// pages/profile.js
import { api } from "@/trpc/react";
import { getServerAuthSession } from "@/server/auth";
import { ProfileContent, ProfilePage } from "@/app/profile/profile";


const Profile = async () => {
    const session = await getServerAuthSession();
    const userId = session?.user.id;
    if (!userId) {
        return null;
    }

    return (
        <main>
            <ProfileContent userId={userId} />
        </main>
    );
};



export default Profile;
