import { Search, SlidersHorizontal } from "lucide-react";
import React from "react";

export default function MobileNav() {
  return (
    <div className="m-3 md:hidden">
      <div className="flex items-center justify-between border rounded-3xl px-3 py-1">
        <div className="flex items-center">
          <Search strokeWidth={2} size={40} className="p-2 rounded-full" />
          <div className="flex flex-col ml-5">
            <span className="text-sm font-semibold">Anywhere</span>
            <span className="text-sm">Any week . Add guests</span>
          </div>
        </div>
        <SlidersHorizontal />
      </div>
    </div>
  );
}
