import { auth } from "@/auth";
import NextAuthProvider from "@/provider/NextAuthProvider";
import "./globals.css";

import TopMenu from "@/components/newUi/topMenu";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = (await auth()) ?? null;
  return (
    <html lang="en">
      <body>
        <NextAuthProvider session={session}>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
