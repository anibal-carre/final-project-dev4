"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { EditModal } from "./EditUserModal";
import { DeleteModal } from "./DeleteUserModal";

//Create Users
const LogsList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/bitacoras");
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
      await axios.delete(`http://127.0.0.1:8000/api/bitacoras/${id}`);
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.idbitacora !== id)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 w-[80%]  md:w-[60%] overflow-y-auto max-h-[600px]"
    >
      {users.map((user) => (
        <li key={user.idbitacora} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <div className="flex gap-1 items-center">
                <span className="text-sm font-semibold leading-6 text-gray-900">
                  Date:
                </span>
                <p className="truncate text-xs leading-5 text-gray-500">
                  {user.fecha}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <span className="text-sm font-semibold leading-6 text-gray-900">
                  Time:
                </span>
                <p className="truncate text-xs leading-5 text-gray-500">
                  {user.hora}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <span className="text-sm font-semibold leading-6 text-gray-900">
                  User:
                </span>
                <p className="truncate text-xs leading-5 text-gray-500">
                  {user.usuario}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <span className="text-sm font-semibold leading-6 text-gray-900">
                  Browser:
                </span>
                <p className="truncate text-xs leading-5 text-gray-500">
                  {user.navegador}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <span className="text-sm font-semibold leading-6 text-gray-900">
                  Ip:
                </span>
                <p className="truncate text-xs leading-5 text-gray-500">
                  {user.ip}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:items-end justify-center">
            <div className="flex gap-2">
              <DeleteModal id={user.idbitacora} userDelete={handleDelete} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LogsList;
