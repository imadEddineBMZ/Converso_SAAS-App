"use client";
import { useUser } from "@clerk/nextjs";
import { Settings,UserPen } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"
import LogoutButton  from "./lougout";

const User = () => {
  const { user } = useUser();
  console.log("User info:", user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage 
          src={user?.imageUrl} 
          alt={user?.fullName || "User Avatar"}
          className="cursor-pointer" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
            <div className="flex flex-col">
                <p>{user?.fullName}</p>
                <p className="text-gray-500 text-sm">{user?.emailAddresses[0]?.emailAddress}</p>
            </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center justify-center gap-2">
            <UserPen size={16} />
            <p>Update Profile</p>
          </div>
          </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center justify-center gap-2">
            <Settings size={16} />
            <p>Settings</p>
          </div>  
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default User;
