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

const NavBar = () => {
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
                  onClick={() => router.push("/admin/profile")}
                />
                <span onClick={() => router.push("/admin/profile")}>
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
                    onClick={() => router.push("/admin")}
                  />
                  <span onClick={() => router.push("/admin")}>Dashboard</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <SettingsIcon
                        className="mr-2 h-4 w-4"
                        onClick={() => router.push("/admin/parameters")}
                      />

                      <span onClick={() => router.push("/admin/parameters")}>
                        Parameters
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users2
                        className="mr-2 h-4 w-4"
                        onClick={() => router.push("/admin/roles")}
                      />
                      <span onClick={() => router.push("/admin/roles")}>
                        Roles
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users2
                        className="mr-2 h-4 w-4"
                        onClick={() => router.push("/admin/users")}
                      />
                      <span onClick={() => router.push("/admin/users")}>
                        Users
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ClipboardList
                        className="mr-2 h-4 w-4"
                        onClick={() => router.push("/admin/logbooks")}
                      />
                      <span onClick={() => router.push("/admin/logbooks")}>
                        Logbooks
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        className="mr-2 h-4 w-4"
                        onClick={() => router.push("/admin/links")}
                      />
                      <span onClick={() => router.push("/admin/links")}>
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

export default NavBar;
