"use client";
import React from "react";
import Image from "next/image";

import { LinkButton } from "@/components/login/linkbutton";

const Logo = "/tumbuhin.svg";

const PreLoginPage = () => {
  //   const { data: session, status } = useSession();
  //   const router = useRouter();

  //   React.useEffect(() => {
  //     if (status == "authenticated") {
  //       // TODO: Changet this with the correct auth homepage
  //       router.push("/homepage");
  //     }
  //   }, [session, status, router]);

  return (
    <div className="flex min-h-screen w-screen flex-grow items-center justify-around gap-7 font-poppins max-lg:flex-col max-lg:justify-center lg:p-20">
      <div className="flex w-fit items-center justify-center p-12">
        <Image
          src={Logo}
          alt="Tumbuhin Logo"
          className="h-auto w-[540px] max-lg:w-[430px]"
        ></Image>
      </div>
      <div className="flex flex-col items-center justify-center text-white">
        <LinkButton text="MASUK" api="/login" />

        <p className="font-lg mb-5 mt-10 text-black">Belum punya akun?</p>
        <LinkButton text="DAFTAR" api="/register" />
      </div>
    </div>
  );
};

export default PreLoginPage;
