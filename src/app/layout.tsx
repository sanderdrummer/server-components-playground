import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Server Components",
  description: "I will not use powerpoint to create presentations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="m-auto flex min-h-screen max-w-2xl min-w-md flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
