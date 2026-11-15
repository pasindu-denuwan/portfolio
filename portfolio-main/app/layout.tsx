import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pasindu Denuwan",
  description: "Pasindu Denuwan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-dark text-accent overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
