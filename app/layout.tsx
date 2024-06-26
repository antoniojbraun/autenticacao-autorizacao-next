import Header from "@/components/header";
import { AuthProvider } from "@/providers/auth-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autenticação e Autorização",
  description: "por Role de Usuário com Next e Typescript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <div className="flex justify-center items-center">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
