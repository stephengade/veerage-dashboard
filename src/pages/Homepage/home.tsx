"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/Input/input";
import { Logo } from "@/components/Logo/logo";
import { Button } from "@/components/Buttons/button";

const Homepage = () => {
  const router = useRouter();

  // initialize states

  const [errorMessage, setErrorMessage] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // destructure the values
  const { email, password } = loginData;

  // handle the input change

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }
  // handle submit here

  const handleSubmit = () => {
    try {
      if (!email || !password) {
        throw new Error("Enter email address and password");
      }

      if (email === "user@test.com" && password === "user1234") {
        router.push("/dashboard");
      } else {
        throw new Error("Invalid email address or password");
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <main className="h-[100dvh] bg-vrBlack w-screen flex flex-col justify-center items-center">
      <Logo />

      <div className="mt-6 max-w-[300px]">
       <p className="text-center text-white">Demo: use <strong>user@test.com</strong> as email address and <strong>user1234</strong> as password</p>
      </div>

      <div className="space-y-3 mt-6">
        <Input name="email" type="email" value={email} onChange={handleOnChange} />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handleOnChange}
        />

        <Button className="bg-vrBlue text-white" onClick={() => handleSubmit()}>
          Log in
        </Button>
      </div>

      {errorMessage && (
        <p className="error text-red mt-5">🔔 {errorMessage}</p>
      )}
    </main>
  );
};

export default Homepage