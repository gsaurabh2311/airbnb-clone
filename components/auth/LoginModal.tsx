"use client"

import React, {useState} from "react";
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

export default function LoginModal() {

const [open, setOpen] = useState<boolean>(false);
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer" onClick = {() => setOpen(true)}>
          Login
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex justify-between items-center">
              <span>Login</span>
              <X className="cursor-pointer" onClick={() => setOpen(false)}/>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <form>
              <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
              <div className="mt-5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" placeholder="Enter your email" id="email" />
                <span className="text-red-400"></span>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                />
                <span className="text-red-400"></span>
              </div>
              <div className="mt-5">
                <Button className="w-full bg-brand">Continue</Button>
              </div>
              <h1 className="text-center my-2 font-bold text-xl">--OR--</h1>
                <Button variant="outline" className="w-full mt-5">
                    <Image src="/images/google.png" width={20} height={20} className="mr-5" alt="google_logo" />
                    Continue with Google</Button>
                <Button variant="outline" className="w-full mt-5">
                    <Image src="/images/github.png" width={20} height={20} className="mr-5" alt="github_logo" />
                    Continue with Github</Button>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
