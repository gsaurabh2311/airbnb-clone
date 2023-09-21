"use client"

import React,{useState} from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
  
export default function SignOutBtn() {
    const [open,setOpen] = useState<boolean>(false)
    const supabase = createClientComponentClient();
    const router = useRouter();
    const logout = async () => {
        await supabase.auth.signOut()
        router.refresh();
    }
  return (
    <AlertDialog open={open}>
    <AlertDialogTrigger asChild>
    <li
        className="hover:bg-gray-200 p-2 rounded-md cursor-pointer"
        onClick={() => setOpen(true)}
        >
          Logout
        </li>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription asChild>
          Do you want to logout
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-brand" onClick={logout}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}
