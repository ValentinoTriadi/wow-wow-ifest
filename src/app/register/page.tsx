"use client";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { registerSchema, type registerType } from "@/lib/schema";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";


const backArrow = "/images/backarrow.svg";

const RegisterForm = () => {
  const router = useRouter();

  const form = useForm<registerType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nama: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const register = api.auth.register.useMutation({
    onError: (err) => {
      alert(err.message);
    },
    onSuccess: () => {
      router.push("/login");
    },
  });

  function submitHandler(data: registerType) {
    if (data.password !== data.confirmPassword) {
      alert("Password dan Konfirmasi Password tidak sama");
      return;
    }

    register.mutate(data);
  }

  return (
    <div className="m-10 flex h-screen flex-col font-poppins">
      <Link href="/">
        <button className="my-8 flex h-10 w-10 items-center justify-center rounded-md bg-lime-500 max-md:my-4 max-md:h-8 max-md:w-8">
          <Image
            src={backArrow}
            alt="Back Arrow Images"
            width={20}
            height={20}

          />
        </button>
      </Link>
      <h1 className="text-4xl font-bold max-md:text-3xl">
        Masukkan Identitas Diri
      </h1>
      <h3 className="mt-4 text-lg font-light max-md:text-sm">
        Lengkapilah identitas diri agar Anda dapat <br></br>terhubung dengan
        fasilitas pertanian yang tersedia
      </h3>
      <div className="my-5 h-[1px] w-full bg-black"></div>
      <Form {...form}>
        <form

          onSubmit={form.handleSubmit(submitHandler)}
          className="h-1/2 space-y-8"
        >
          {/* Nama Panjang Field */}
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Lengkap </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan nama lengkap sesuai KTP"
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* no telp Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Masukkan email"
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kata Sandi </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    placeholder="Masukkan kata sandi"
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Confirmation Field */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Konfirmasi Kata Sandi </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    placeholder="Masukkan kata sandi"
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="mt-10 bg-lime-500 p-6 text-lg hover:bg-lime-600"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
