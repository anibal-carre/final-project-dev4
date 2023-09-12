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

export function CreateRol() {
  const [rol, setUsername] = useState("");
  const [fechacreacion, setPassword] = useState("");
  const [idrol, setRol] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/roles", {
        rol,
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
          Create New Rol
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create a new rol</AlertDialogTitle>
          <AlertDialogDescription>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="username">Rol Name</Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Enter a name"
                  onChange={(e) => setUsername(e.target.value)}
                />
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
