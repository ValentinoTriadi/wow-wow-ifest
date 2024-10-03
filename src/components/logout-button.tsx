"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut({ redirect: false, callbackUrl: "/" });
    router.push("/login");
  };
  return (
    <form
      action={async () => {
        await handleLogout();
      }}
    >
      <Button type="submit">Logout</Button>
    </form>
  );
};
