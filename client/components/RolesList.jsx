"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { DeleteRol } from "./DeleteRol";
import { EditRol } from "./EditRol";

//Create Users
const RolesList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/roles");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  //Delete Users
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/roles/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.idrol !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <ul role="list" className="divide-y divide-gray-100 w-[80%]  md:w-[60%]">
      {users.map((user) => (
        <li key={user.idrol} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-md font-semibold leading-6 text-gray-900">
                {user.rol}
              </p>

              <p className="text-sm font-base leading-6 text-gray-900">
                {user.created_at ? user.created_at.toString().slice(0, 10) : ""}
              </p>
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:items-end justify-end">
            <div className="flex gap-2">
              <DeleteRol id={user.idrol} userDelete={handleDelete} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RolesList;
