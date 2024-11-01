import Link from "next/link";

export default function CampGroundCardM1Admin() {
  return (
    <Link href="/campground/create">
      <div className="w-[320px] h-[400px] rounded-[24px] bg-white shadow-2xl px-[24px] py-[24px]">
        <div className="w-full h-full rounded-[24px] border-[2.5px] border-dashed border-blue-400 flex flex-col items-center justify-center text-blue-400">
          <h1 className="text-[120px]">+</h1>
          <h1 className="text-[28px] text-center">Create New Campground</h1>
        </div>
      </div>
    </Link>
  );
}
