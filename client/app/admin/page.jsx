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

const AdminPage = () => {
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
              src="https://github.com/shadcn.png"
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
              links={"admin/links"}
              parameters={"admin/parameters"}
              users={"admin/users"}
              logbooks={"admin/logbooks"}
              roles={"admin/roles"}
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
              Home / Desk
            </span>
          </div>
          <div className="h-24 md:h-[150px] flex gap-3 justify-center items-center">
            <div className="w-[300px] flex flex-col">
              <img
                src="assets/devchallenges.svg"
                alt="img"
                className="h-8 self-start"
              />
              <span className="font-semibold text-lg self-end">
                Welcome Admin !!!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
