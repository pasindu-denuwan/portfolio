import type { Metadata } from "next";
import "./globals.css";

const pdIconDataUri = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%23091540'/%3E%3Crect width='60' height='60' x='2' y='2' rx='14' fill='none' stroke='%231B2CC1' stroke-width='2' stroke-opacity='0.6'/%3E%3Ctext x='32' y='42.5' font-family='system-ui, -apple-system, Segoe UI, Roboto, sans-serif' font-size='29' font-weight='800' fill='%23ABD2FA' text-anchor='middle' letter-spacing='1'%3EPD%3C/text%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "Pasindu Denuwan",
  description: "Pasindu Denuwan Portfolio",
  icons: {
    icon: [
      { url: pdIconDataUri, type: "image/svg+xml" },
      { url: "/icon.svg?v=4", type: "image/svg+xml" },
      { url: "/favicon.ico?v=4" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href={pdIconDataUri} />
        <link rel="shortcut icon" href={pdIconDataUri} />
        <link rel="icon" href="/icon.svg?v=4" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico?v=4" />
      </head>
      <body className="relative min-h-screen bg-dark text-accent overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
