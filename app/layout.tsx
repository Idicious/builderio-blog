import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuilderIO Next.js Example",
  description: "Headless CMS for Next.js",
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
