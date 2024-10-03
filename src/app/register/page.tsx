"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LoginRole } from "../login/ILoginData";
import Link from "next/link";
import Image from "next/image";

const backArrow = "/images/backarrow.svg";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = z.object({
    name: z.string()
        .min(1, { message: "Nama Panjang is required" }),
    email: z
      .string()
      .email("Email yang digunakan tidak Valid")
      .min(1, { message: "Email is required" }),
    password: z.string(),
    role: z.nativeEnum(LoginRole),
  });

  const roles = [
    {
      id: LoginRole.User,
      label: "Pengguna",
    },
    {
      id: LoginRole.Pekerja,
      label: "Pekerja",
    },
    {
      id: LoginRole.Penjual,
      label: "Penjual",
    },
  ];

  function onSubmit(values: z.infer<typeof loginSchema>) {
    //TODO: PASS ANY DATA TO DB
    console.log("Data Login : ", values);
  }

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: LoginRole.User,
    },
  });

  return (
    <div className="m-10 flex h-screen flex-col font-poppins">
      <Link href="/landing">
        <button className="my-8 flex h-10 w-10 items-center justify-center rounded-md bg-lime-500 max-md:my-4 max-md:h-8 max-md:w-8">
          <Image
            src={backArrow}
            width={10}
            height={10}
            alt="Back Arrow Images"
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
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="h-1/2"
        >
          <div className="flex flex-col gap-5">
            {/* Nama Panjang Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Panjang: </FormLabel>
                  <FormControl>
                    <Input placeholder="Fauzan Azhim" {...field}></Input>
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email: </FormLabel>
                  <FormControl>
                    <Input placeholder="1235@gmail.com" {...field}></Input>
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password: </FormLabel>
                  <FormControl>
                    <div className="relative h-fit">
                      <Input
                        {...field}
                        placeholder="Your Password"
                        type={showPassword ? "text" : "password"}
                      ></Input>
                      <button
                        onClick={handlePasswordVisibility}
                        className="absolute right-3 top-1/3"
                        type="button"
                      >
                        <Image
                          width={10}
                          height={10}
                          src={
                            showPassword
                              ? "/images/visibility.svg"
                              : "/images/visibility_off.svg"
                          }
                          alt="Show Password"
                          className="h-5 w-5 -translate-y-1"
                        />
                      </button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            ></FormField>

            {/* Role Selection */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mendaftar Sebagai: </FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={field.value.toString()}
                      onValueChange={field.onChange}
                      className="flex flex-row"
                    >
                      {roles.map((role) => (
                        <FormItem
                          key={role.id}
                          className="flex items-center justify-center space-y-0"
                        >
                          <RadioGroupItem
                            value={role.id.toString()}
                            id={role.id.toString()}
                          />
                          <FormLabel
                            htmlFor={role.id.toString()}
                            className="ml-2"
                          >
                            {role.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
          </div>
          <Button className="mt-10 bg-lime-500 p-6 text-lg" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
