"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

import axios from "axios";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AlertDialogDemo() {
  const [usuario, setUsername] = useState("");
  const [clave, setPassword] = useState("");
  const [idrol, setRol] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/usuarios", {
        usuario,
        clave,
        habilitado: 1,
        idrol,
      });

      console.log("User created:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error while create an user:", error);
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="border bg-zinc-900 text-white text-sm p-2 md:p-3 rounded-md hover:bg-zinc-500">
          Create New User
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create a new user</AlertDialogTitle>
          <AlertDialogDescription>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Enter a name"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="username">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter a password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="w-full flex flex-col items-start gap-2">
                <span>Rol</span>
                <select
                  className="h-10 border rounded-[6px] w-full"
                  name=""
                  id=""
                  onChange={(e) => setRol(e.target.value)}
                >
                  <option value="1">Admin</option>
                  <option value="2">User</option>
                </select>
              </div>

              <input
                type="submit"
                value="Create"
                className="border h-8 bg-zinc-900 text-white rounded-md cursor-pointer hover:bg-zinc-500"
              />
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
