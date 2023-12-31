"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGauge, faHouse } from "@fortawesome/free-solid-svg-icons";

import { LifeBuoy } from "lucide-react";
import { UserBox } from "@/components/ui/UserBox";
import UserNav from "@/components/UserNav";
import { ComboboxDemo } from "@/components/ui/ComboBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { ModalProfile } from "@/components/ModalProfile";

const Profile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData) {
    // Aquí puedes acceder a los datos del usuario
    console.log("Nombre de usuario:", userData.usuario);
    console.log("ID de rol:", userData.idrol);
  } else {
    console.log("data do not exits");
  }
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
              src="https://github.com/shadcn.png"
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-white text-sm font-thin">Welcome</span>
              <span className="text-white text-sm font-normal">
                {userData.usuario.usuario}
              </span>
            </div>
          </div>
          <div className="h-12 mt-6 flex items-center justify-start px-2">
            <div className="w-[200px]">
              <Link
                href={"/admin"}
                className="text-white text-md font-normal cursor-pointer flex"
              >
                <LifeBuoy className="text-white cursor-pointer mr-2" />
                Dashboard
              </Link>
            </div>
          </div>
          <div className="h-12 mt-3 flex items-center justify-start px-2">
            <ComboboxDemo
              links={"/admin/links"}
              parameters={"/admin/parameters"}
              users={"/admin/users"}
              logbooks={"/admin/logbooks"}
              roles={"/admin/roles"}
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
              Home / Profile
            </span>
          </div>
          <div className="h-24 md:h-[150px] flex gap-3 justify-center items-center">
            <div className="w-full flex flex-col items-center md:items-end md:pr-[10px] lg:pr-[100px] xl:pr-[150px] 2xl:pr-[250px] pt-10">
              <ul
                role="list"
                className="divide-y divide-gray-100 w-[80%]  md:w-[60%] overflow-y-auto max-h-[600px] mt-20"
              >
                <li className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4 mt-10">
                    <img
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src={"https://github.com/shadcn.png"}
                      alt=""
                    />
                    <div className="min-w-0 flex-auto flex flex-col gap-2 ml-5">
                      <div>
                        <span className="text-sm font-semibold">Rol</span>
                        <p className=" truncate text-xs leading-5 text-gray-500">
                          {userData.usuario.idrol === 1 ? "Admin" : "User"}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold">User</span>
                        <p className=" truncate text-xs leading-5 text-gray-500">
                          {userData.usuario.usuario}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold">Password</span>
                        <p className=" truncate text-xs leading-5 text-gray-500">
                          ********
                        </p>
                      </div>

                      <div>
                        <span className="text-sm font-semibold">Created</span>
                        <p className=" truncate text-xs leading-5 text-gray-500">
                          {userData.usuario.created_at.toString().slice(0, 10)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:flex sm:flex-col sm:items-end justify-end">
                    <div className="flex gap-2 mt-10">
                      <ModalProfile />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
