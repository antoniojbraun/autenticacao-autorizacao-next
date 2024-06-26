"use client";
import { useSession } from "next-auth/react";
export default function Page() {
  const { data: session } = useSession();
  return (
    <div className="w-full max-w-screen-xl h-screen flex flex-col justify-center items-center">
      <h1>Página Pública</h1>
      {session && (
        <pre className="bg-slate-900 text-slate-50 p-10 rounded-lg mt-2">
          {JSON.stringify(session, null, 2)}
        </pre>
      )}
    </div>
  );
}
