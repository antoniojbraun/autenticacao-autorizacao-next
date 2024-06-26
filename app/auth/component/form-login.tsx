"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      console.log("[LOGIN_RESPONSE}: ", response);
      if (!response?.error) {
        router.refresh();
        router.push("/private");
      } else {
        setError("Email ou senha inválidos!");
      }
    } catch (error) {
      console.error("[LOGIN_ERROR}: " + error);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="p-10 border rounded-lg w-96">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <p className="text-sm text-slate-700 mb-5">
          Faça login para continuar.
        </p>
        <div className="flex flex-col">
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded p-3 w-full"
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded p-3 w-full"
            />
          </div>
          {error && (
            <span className="text-red-400 text-sm block mt-2">{error}</span>
          )}
          <button
            type="submit"
            className="mt-5 bg-rose-950 text-slate-50 p-3 rounded">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
