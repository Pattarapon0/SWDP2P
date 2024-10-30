
import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-800">Home {session?.user.name?? ''}</h1>
      <div>
      {
        session ? (
          <Link href="/api/auth/signout">Logout</Link>
        ): (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </div>
      <div>
      {!session&&<Link href="/register">Register</Link>}
      </div>
      <div>
        {session && <Link href="/campground">Campground</Link>}
      </div>
    </div>
  );
}
