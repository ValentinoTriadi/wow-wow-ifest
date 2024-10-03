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
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { loginSchema, type loginType } from "@/lib/schema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import BackArrow from "public/images/backarrow.svg";
import { StaticImageTranslator } from "@/utilities/static-image-translator";

const LoginForm = () => {
  const router = useRouter();

  async function onSubmit(values: loginType) {
    const { email_or_phone: email, password } = values;

    await signIn("credentials", {
      redirect: false,
      email,
      password,
    }).then((res) => {
      if (res?.error) {
        alert(res.error);
      } else {
        router.push("/");
      }
    });
  }
  
  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email_or_phone: "",
      password: "",
    },
  });

  return (
    <div className="m-10 flex h-screen flex-col font-poppins">
      <Link href="/">
        <button className="my-8 flex h-10 w-10 items-center justify-center rounded-md bg-lime-500 max-md:my-4 max-md:h-8 max-md:w-8">
          <Image
            src={StaticImageTranslator(BackArrow)}
            height={10}
            width={10}
            alt="Back Arrow Images"
          />
        </button>
      </Link>
      <h1 className="text-4xl font-bold max-md:text-3xl">Masukkan Email</h1>
      <h3 className="mt-4 text-lg font-light max-md:text-sm">
        Lengkapilah identitas diri agar Anda dapat <br></br>terhubung dengan
        fasilitas pertanian yang tersedia
      </h3>
      <div className="my-5 h-[1px] w-full bg-black"></div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-5"
        >
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email_or_phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan Email" {...field}></Input>
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
                  <Input {...field} placeholder="Masukkan Kata Sandi"></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="bottom-0 mt-5 bg-lime-500 p-6 text-lg hover:bg-lime-600"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>

      <div className="mb-14 mt-auto flex flex-col items-center max-md:mb-20">
        <p className="text-center text-sm font-medium leading-none">
          Belum punya akun TumbuhIn?{" "}
          <span className="p-2 font-bold text-blue-600 hover:text-blue-500">
            <a href="/register">DAFTAR</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
