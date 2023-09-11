"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  const [register, setRegister] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    setRegister(!register);
  };
  return (
    <div className="w-screen h-screen md:flex md:flex-col md:items-center md:justify-center">
      {!register ? (
        <LoginForm handleRegister={handleRegister} router={router} />
      ) : (
        <RegisterForm handleRegister={handleRegister} router={router} />
      )}
    </div>
  );
}
