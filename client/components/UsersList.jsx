"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { EditModal } from "./EditUserModal";
import { DeleteModal } from "./DeleteUserModal";

//Create Users
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/usuarios");
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
      await axios.delete(`http://127.0.0.1:8000/api/usuarios/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <ul role="list" className="divide-y divide-gray-100 w-[80%]  md:w-[60%]">
      {users.map((user) => (
        <li key={user.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {user.usuario}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {user.idrol === 1 ? "Admin" : "User"}
              </p>
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:items-end justify-end">
            <div className="flex gap-2">
              <EditModal id={user.id} />

              <DeleteModal id={user.id} userDelete={handleDelete} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
