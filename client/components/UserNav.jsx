"use client";
import { useRouter } from "next/navigation";
import {
  LifeBuoy,
  LogOut,
  Settings,
  User,
  Users2,
  Link,
  ClipboardList,
  Users,
  SettingsIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserNav = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("userData");

    router.push("/");
  };
  return (
    <header className="w-full h-20 bg-zinc-900 flex justify-between items-center px-5 ">
      <div>
        <img src="/assets/devchallenges-light.svg" alt="dev" />
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User
                  className="mr-2 h-4 w-4"
                  onClick={() => router.push("/user/profile")}
                />
                <span onClick={() => router.push("/user/profile")}>
                  Profile
                </span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <LifeBuoy
                    className="mr-2 h-4 w-4"
                    onClick={() => router.push("/user")}
                  />
                  <span onClick={() => router.push("/user")}>Dashboard</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <SettingsIcon
                        className="mr-2 h-4 w-4"
                        onClick={() => router.push("/user/parameters")}
                      />

                      <span onClick={() => router.push("/user/parameters")}>
                        Parameters
                      </span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Users2
                        className="mr-2 h-4 w-4"
                        onClick={() => router.push("/user/person")}
                      />
                      <span onClick={() => router.push("/user/person")}>
                        Person
                      </span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Link
                        className="mr-2 h-4 w-4"
                        onClick={() => router.push("/user/links")}
                      />
                      <span onClick={() => router.push("/user/links")}>
                        Links
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut
                className="mr-2 h-4 w-4"
                onClick={() => router.push("/")}
              />
              <span onClick={handleLogout}>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default UserNav;
