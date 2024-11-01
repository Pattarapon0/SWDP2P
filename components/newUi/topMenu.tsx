import { auth } from "../../auth";
import ButtonM1 from "./buttonM1";

export default async function TopMenu({
  isEmpty = false,
}: {
  isEmpty?: boolean;
}) {
  const session = await auth();
  const isAdmin = session?.user.role === "admin";
  const title = (
    <div className="flex flex-row space-x-[8px] ">
      <h1 className="font-bold text-[40px] text-blue-600">Campground</h1>
      <h1 className="font-bold text-[40px] text-blue-950"> Booking</h1>
      {isAdmin ? (
        <h1 className="font-bold text-[40px] text-blue-600">(Admin)</h1>
      ) : (
        ""
      )}
    </div>
  );

  if (isEmpty) {
    return (
      <div className={"w-full px-[64px] py-[16px] bg-blue-200 "}>{title}</div>
    );
  }

  if (!session) {
    return (
      <div className={" w-full px-[64px] py-[16px] bg-blue-200  flex flex-row"}>
        {title}
        <div className="flex justify-end items-center space-x-[32px] w-full">
          <ButtonM1 text="Sign In" url="/auth/signIn" />
        </div>
      </div>
    );
  }
  return (
    <div className={"w-full px-[64px] py-[16px] bg-blue-200 flex flex-row"}>
      {title}
      <div className="flex justify-end items-center space-x-[32px] w-full">
        <ButtonM1 text="My Booking" url="/mybooking" />
        <ButtonM1 text="Sign Out" url="/auth/signOut" />
      </div>
    </div>
  );
}
