import { auth } from "@/auth";
import Link from "next/link";
import TopMenu from "@/components/newUi/topMenu";
import Banner from "@/components/newUi/banner";
// import ButtonM1 from "@/components/newUi/buttonM1";
import ButtonM2 from "@/components/newUi/buttonM2";

export default async function Home() {
  const session = await auth();

  const notLogIn = (
    <div>
      <div className="text-[40px] text-blue-50">
        Please Sign In First Before You Can Book a Campground
      </div>
      <div className="w-auto">
        <ButtonM2
          text="Book a Campground Now"
          url="/campground"
          isDisabled={true}
        />
      </div>
    </div>
  );
  return (
    <div className="flex flex-col items-center justify-center">
      <TopMenu />
      <div className="flex flex-col w-[100vw] h-auto ">
        <Banner />
        <div className="w-[100vw] h-auto flex justify-center bg-blue-600 py-[64px]">
          {session ? (
            <ButtonM2 text="Book a Campground Now" url="/campground" />
          ) : (
            <div className="flex flex-col space-y-[32px]">
              <div className="text-[40px] text-blue-50">
                Please Sign In First Before You Can Book a Campground
              </div>
              <div className="w-auto flex justify-center">
                <ButtonM2
                  text="Book a Campground Now"
                  url="/campground"
                  isDisabled={true}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-[64px]">
        <h1 className="text-3xl font-bold text-blue-800">
          Home {session?.user.name ?? ""}
        </h1>
        <div>
          {session ? (
            <Link href="/api/auth/signout">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
        <div>{!session && <Link href="/register">Register</Link>}</div>
        <div>
          {session && (
            <Link href={`/campground?role=${session.user.role}`}>
              Campground
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
