"use client";

import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginType, loginSchema } from "@/validations/authSchema";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (payload: LoginType) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: payload.email,
      password: payload.password,
    });
    setLoading(false);
    if (error) {
      toast.error(error.message, { theme: "colored" });
    } else if (data.user) {
        setOpen(false);
        router.refresh();
        toast.success("Logged In Successfully", { theme: "colored" });
    }
  };
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <li
          className="hover:bg-gray-200 p-2 rounded-md cursor-pointer"
          onClick={() => setOpen(true)}
        >
          Login
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="flex justify-between items-center">
              <span>Login</span>
              <X className="cursor-pointer" onClick={() => setOpen(false)} />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              <ToastContainer />
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
                <div className="mt-5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    {...register("email")}
                  />
                  <span className="text-red-400">{errors.email?.message}</span>
                </div>
                <div className="mt-5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    {...register("password")}
                  />
                  <span className="text-red-400">
                    {errors.password?.message}
                  </span>
                </div>
                <div className="mt-5">
                  <Button className="w-full bg-brand" disabled={loading}>
                    {loading ? "Processing" : "Continue"}
                  </Button>
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
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full mt-5">
                  <Image
                    src="/images/github.png"
                    width={20}
                    height={20}
                    className="mr-5"
                    alt="github_logo"
                  />
                  Continue with Github
                </Button>
              </form>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
