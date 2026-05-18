import type { Metadata } from "next";
// import { AuthProvider } from "@/src/features/auth/providers/AuthProvider";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Wendy Glen | Portfolio",
  description:
    "A professional Virtual Assistant with a decade of experience supporting businesses across different industries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
