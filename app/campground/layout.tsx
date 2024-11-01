import { auth } from "@/auth";
import NextAuthProvider from "@/provider/NextAuthProvider";
import TopMenu from "@/components/newUi/topMenu";

export default async function CampGrondLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <NextAuthProvider session={session}>
      <TopMenu />
      {children}
    </NextAuthProvider>
  );
}
