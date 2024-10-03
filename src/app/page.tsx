
import { HydrateClient } from "@/trpc/server";
import { LinkButton } from "@/components/login/linkbutton";

import { getServerAuthSession } from "@/server/auth";
import { LogoutButton } from "@/components/logout-button";
import Head from "next/head";
import Image from "next/image";
import ArticleCarousel from "@/components/ArticleCarousel";
import MyHarvest from "@/components/MyHarvest";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const session = await getServerAuthSession();

  if (!session) {
    return (
      <HydrateClient>
        <div className="flex min-h-screen w-screen flex-grow items-center justify-around gap-7 font-poppins max-lg:flex-col max-lg:justify-center lg:p-20">
          <div className="flex w-fit items-center justify-center p-12">
            <Image
              src={"/images/tumbuhin.svg"}
              alt="Tumbuhin Logo"
              width={540}
              height={540}
              className="h-auto w-[540px] max-lg:w-[430px]"
            ></Image>
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <LinkButton text="MASUK" api="/login" />

            <p className="font-lg mb-5 mt-10 text-black">Belum punya akun?</p>
            <LinkButton text="DAFTAR" api="/register" />
          </div>
        </div>
      </HydrateClient>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>TumbuhIn</title>
      </Head>
      <Navbar />

      <main className="flex flex-col gap-8 p-4">

        <section>
          <h2 className="mx-1 text-2xl font-bold">Halo, Davis!</h2>
          <ArticleCarousel />
        </section>
        <section>
          <h3 className="mx-1 mb-2 text-xl font-bold">Kategori</h3>
          <div className="mb-4 flex space-x-4">
            <button className="rounded-full bg-[#dbefb2] px-4 py-2">
              Tani
            </button>
            <button className="rounded-full bg-[#dbefb2] px-4 py-2">
              Ternak
            </button>
            <button className="rounded-full bg-[#dbefb2] px-4 py-2">
              Kebun
            </button>
          </div>
        </section>
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="mx-1 text-xl font-bold">Panen saya</h3>
            <button className="text-[#77ab24] underline underline-offset-2">
              Lihat semua
            </button>
          </div>
          <MyHarvest />
        </section>
      </main>
    </div>
  );
}
