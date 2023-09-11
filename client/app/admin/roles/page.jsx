"use client";

import NavBar from "@/components/NavBar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGauge, faHouse } from "@fortawesome/free-solid-svg-icons";
import { ComboboxDemo } from "@/components/ui/ComboBox";
import { useRouter } from "next/navigation";

import { LifeBuoy } from "lucide-react";
import { DataTableDemo } from "@/components/UsersTable";
import UserList from "@/components/UsersList";
import { AlertDialogDemo } from "@/components/CreateUserModal";
import RolesList from "@/components/RolesList";
import { CreateRol } from "@/components/CreateRol";
const RolesPage = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-100">
      <NavBar />

      <div className="w-full h-full flex">
        <aside
          className={
            openMenu
              ? "w-[250px] sm:w-[50%] bg-zinc-900 translate-x-[0%] z-30 relative transition-all duration-300 md:w-[250px] lx:w-[300px] md:translate-x-[0%] p-3"
              : "w-[250px] sm:w-[50%] bg-zinc-900 translate-x-[-100%] z-30 relative transition-all duration-200 md:w-[250px] lx:w-[300px] md:translate-x-[0%] p-3"
          }
        >
          <button onClick={handleMenu} className="md:hidden">
            <FontAwesomeIcon icon={faXmark} className="text-white" />
          </button>

          <div className="flex items-center h-12 mt-5 px-2 gap-3">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-white text-sm font-thin">Welcome</span>
              <span className="text-white text-md font-normal">
                Admin System
              </span>
            </div>
          </div>
          <div className="h-12 mt-6 flex items-center justify-start px-2">
            <div className="w-[200px]">
              <span
                className="text-white text-md font-normal cursor-pointer flex"
                onClick={() => router.push("/admin")}
              >
                <LifeBuoy className="text-white cursor-pointer mr-2" />
                Dashboard
              </span>
            </div>
          </div>
          <div className="h-12 mt-3 flex items-center justify-start px-2">
            <ComboboxDemo
              links={"links"}
              parameters={"parameters"}
              users={"users"}
              logbooks={"logbooks"}
              roles={"roles"}
            />
          </div>
        </aside>
        <div className="hidden md:flex md:h-full md:w-14 md:border md:bg-white md:z-50"></div>
        {/* Main */}
        <div className="w-screen h-auto absolute md:w-full md:h-[200px] ">
          <div className="border w-full h-12 px-3 flex items-center justify-between md:justify-end bg-white">
            <button onClick={handleMenu} className="md:hidden">
              <FontAwesomeIcon icon={faBars} className="text-lg" />
            </button>
            <span className="text-sm">
              <FontAwesomeIcon icon={faHouse} className="text-zinc-700 mr-2" />
              Admin / Roles
            </span>
          </div>
          <div className="h-auto flex gap-3 justify-center md:justify-end w-full">
            <div className="w-full flex flex-col items-center md:items-end md:pr-[10px] lg:pr-[100px] xl:pr-[150px] 2xl:pr-[250px] pt-10">
              <div className="h-auto w-[80%] md:w-[60%] flex justify-start md:justify-end mb-5">
                <CreateRol />
              </div>
              <RolesList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesPage;
