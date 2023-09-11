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
import { Button } from "@/components/ui/button";
import { Edit, Pencil, Trash2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState, useEffect } from "react";
import axios from "axios";

export function EditRol({ id }) {
  const [rol, setUsername] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/roles/${id}`)
      .then((response) => {
        const data = response.data;
        setUsername(data.rol);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleUsuarioChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/roles/${id}`,
        {
          rol,
        }
      );

      if (response.status === 200) {
        console.log("Success");
        window.location.reload();
      } else {
        console.error("Error to edit user");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="border flex gap-2 items-center bg-blue-600 text-white text-sm p-2 md:p-3 rounded-md hover:bg-zinc-500">
          Edit <Edit className="w-4 " />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Rol</AlertDialogTitle>
          <AlertDialogDescription>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col items-start gap-2">
                <Label htmlFor="username">Rol</Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Enter a name"
                  value={rol}
                  onChange={handleUsuarioChange}
                />
              </div>

              <input
                type="submit"
                value="Save"
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
