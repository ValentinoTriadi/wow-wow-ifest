"use client"

import React, {useState} from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

interface UserProps{
    user: {
        name: string,
        email: string,
        telp: number,
        password: string
    }
}

export const ProfilePage: React.FC<UserProps> = ({user}) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.telp);
    const [password, setPassword] = useState(user.password);
    const [image, setImage] = useState("/article/buah.jpg");

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
                        <div className="mb-4">
                            <label className="block text-gray-700">Nomor Telepon</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(parseInt(e.target.value))}
                                className="border border-gray-300 p-2 rounded w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Kata Sandi</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
