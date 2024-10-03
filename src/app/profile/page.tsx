// pages/profile.js
import { api } from "@/trpc/react";
import { getServerAuthSession } from "@/server/auth";
import {ProfilePage} from "@/app/profile/profile";

const Profile = async() => {

    const session =  await getServerAuthSession()
    const userId = session?.user.id
    if (!userId) {
        return null
    }
    const getUser = api.user.getUser.useQuery({id: userId})

    if (getUser.isLoading){
        return <div>Loading...</div>
    }

    const user = getUser.data
    if (!user){
        return <div>User not found</div>
    }
    const {name, email, phoneNumber, password} = user
    const formattedUser = {
        name,
        email: email?? "",
        telp: phoneNumber,
        password
    }

    return (
        <main>
            <ProfilePage user={formattedUser}/>
        </main>
    )
};

export default Profile;
