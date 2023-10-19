import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Car website",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
