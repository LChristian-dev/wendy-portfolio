import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body>
        {children}
        <Script
          id="calendly-widget-script"
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
