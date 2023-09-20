"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Image from "next/image";
import { RegisterType, registerSchema } from "@/validations/authSchema";

export default function LoginModal() {
  const [open, setOpen] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterType>({
    resolver: yupResolver(registerSchema)
  });
  const onSubmit = (data: RegisterType) => console.log(data);
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer" onClick={() => setOpen(true)}>
          Sign Up
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex justify-between items-center">
              <span>Sign Up!</span>
              <X className="cursor-pointer" onClick={() => setOpen(false)} />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
              <div className="mt-5">
                <Label htmlFor="name">Name</Label>
                <Input type="name" placeholder="Enter your name" id="name" {...register("name")} />
                <span className="text-red-400">{errors.name?.message}</span>
                <Label htmlFor="email">Email</Label>
                <Input type="email" placeholder="Enter your email" id="email" {...register("email")}/>
                <span className="text-red-400">{errors.email?.message}</span>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  {...register("password")}
                />
                <span className="text-red-400">{errors.password?.message}</span>
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input
                  type="cpassword"
                  placeholder="Confirm your password"
                  id="cpassword"
                  {...register("password_confirmation")}
                />
                <span className="text-red-400">{errors.password_confirmation?.message}</span>
              </div>
              <div className="mt-5">
                <Button className="w-full bg-brand">Continue</Button>
              </div>
              <h1 className="text-center my-2 font-bold text-xl">--OR--</h1>
              <Button variant="outline" className="w-full mt-5">
                <Image
                  src="/images/google.png"
                  width={20}
                  height={20}
                  className="mr-5"
                  alt="google_logo"
                />
                Signup with Google
              </Button>
              <Button variant="outline" className="w-full mt-5">
                <Image
                  src="/images/github.png"
                  width={20}
                  height={20}
                  className="mr-5"
                  alt="github_logo"
                />
                Signup with Github
              </Button>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
