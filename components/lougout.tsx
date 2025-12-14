"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from 'lucide-react';
export default function LogoutButton() {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();           
    router.replace("/sign-in");
  };

  return (
    <Button
      onClick={handleLogout}
      className="w-full bg-red-900 cursor-pointer rounded-xl px-4 py-2 hover:bg-red-700 hover:text-white transition"
    >
            <LogOut size={16} className="text-white" />
            <span>Sign Out</span>
    </Button>
  );
}
