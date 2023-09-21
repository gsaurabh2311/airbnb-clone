import React from "react";
import BrandLogo from "./BrandLogo";
import {Search} from "lucide-react"
import NavPopupMenu from "./NavPopupMenu";
import MobileNav from "./MobileNav";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import {cookies} from "next/headers"

export default async function Navbar() {
  const supabase = createServerComponentClient({cookies});
  const {data,error} = await supabase.auth.getSession();
  console.log("The session is", data);

  return (
    <div className="flex items-center justify-between px-10 border-b-[1px]">
      <div className="hidden md:block">
        <BrandLogo />
      </div>
      <div className="w-full md:w-auto">
      <div className = "hidden md:flex gap-3 border-2 border-black rounded-3xl items-center p-2">
        <span className="text-sm pl-2">Anywhere</span>
        <span>|</span>
        <span className="text-sm">Any week</span>
        <span>|</span>
        <span className="text-sm pr-2 text-gray-400">Guest</span>
        <Search strokeWidth = {3} size={30} className="bg-brand text-white p-2 rounded-full" />
      </div>
      <MobileNav />
      </div>
      <div className = "hidden md:flex gap-2">
        {/* Third Component */}
        <span>Add your home</span>
        <NavPopupMenu session={data?.session?.user} />
      </div>
    </div>
  );
}
