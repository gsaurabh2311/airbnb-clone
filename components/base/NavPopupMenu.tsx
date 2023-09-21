import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";
import SignOutBtn from "../common/SignOutBtn";

export default function NavPopupMenu({ session }: { session: object | undefined }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-menu-square"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 8h10" />
          <path d="M7 12h10" />
          <path d="M7 16h10" />
        </svg>
      </PopoverTrigger>
      <PopoverContent className="mr-5">
        <ul className="gap-4">
          {session != null ? (
            <>
              <li
                className="hover:bg-gray-200 p-2 rounded-md cursor-pointer"
              >Dashboard</li>
              <SignOutBtn />
            </>
          ) : (
            <>
              <LoginModal />
              <SignupModal />
            </>
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
