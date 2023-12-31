import "./globals.css";
import { Metadata } from "next";
import NextAuthSessionProvider from "../providers/SessionProvider";

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
      <body>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
