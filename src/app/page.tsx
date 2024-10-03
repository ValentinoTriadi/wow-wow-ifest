import Image from "next/image";

import { HydrateClient } from "@/trpc/server";
import { LinkButton } from "@/components/login/linkbutton";
import { getServerAuthSession } from "@/server/auth";
import { LogoutButton } from "@/components/logout-button";

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
          <h1>UDAH KE LOGIN</h1>
          <p className="text-black">{JSON.stringify(session.user)}</p>
          <LogoutButton />
        </div>
      </div>
    </HydrateClient>
  );
}
