import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Verified",
  description: "Practicing",
  icons: {
    icon: "/verified.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-grotesk">
        <Navbar />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
