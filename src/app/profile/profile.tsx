"use client"

import React, {useState, useEffect} from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { api } from "@/trpc/react";

interface UserProps{
    user: {
        name: string,
        email: string
    }
}

export const ProfileContent = ({ userId }: { userId: string }) => {
    const { data, isLoading } = api.user.getUser.useQuery({ id: userId });
    const [formattedUser, setFormattedUser] = useState<{ name: string; email: string } | null>(null);

    useEffect(() => {
        if (data) {
            const { name, email } = data;
            setFormattedUser({
                name: name ?? "",
                email: email ?? "",
            });
        }
    }, [data]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!formattedUser) {
        return <div>User not found</div>;
    }

    return <ProfilePage user={formattedUser} />;
};

export const ProfilePage: React.FC<UserProps> = ({user}) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [image, setImage] = useState("/article/woman.jpg");

    const handleUpdateProfile = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert('Profil diperbarui!');
    };

    return (
        <main>
            <Navbar/>
            <div className="flex flex-col gap-5 p-6 w-full h-full">
                <h2 className="text-xl font-bold mb-4">Profil Anda</h2>
                <Image
                    src={image}
                    alt="Profile Picture"
                    width={160}
                    height={160}
                    className="aspect-square rounded-full mx-auto"
                />
                <div className='mt-5'>
                    <form onSubmit={handleUpdateProfile}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Nama</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border border-gray-300 p-2 rounded w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-gray-300 p-2 rounded w-full"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-lime-500 text-white font-bold my-5 py-2 px-4 rounded-[15px] w-full"
                        >
                            Perbarui Profil
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};
