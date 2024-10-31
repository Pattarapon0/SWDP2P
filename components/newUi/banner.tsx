import Image from "next/image";
import { auth } from "../../auth";
// import k from "../../public/img/bg1.png"

export default async function Banner() {
  const session = await auth();
  return (
    <div className="w-[100vw] h-[80vh] overflow-hidden relative">
      <Image
        src={"/img/bg1.png"}
        alt="banner image"
        className="object-cover -z-40 absolute top-0 left-0"
        // width={1440 * (1920 / 1440)}
        // height={640 * (1920 / 1440)}
        fill={true}
      ></Image>
      <div className="-z-30 absolute top-0 left-0 bg-gradient-to-b from-transparent to-blue-600 w-[100vw] h-[80vh]"></div>
      <div className="w-full h-full flex items-end z-30 ">
        <div className="flex flex-col w-full px-[96px] py-[32px] space-y-[32px] text-blue-50 ">
          <h1 className=" font-bold text-[40px]">
            Hello {session ? session.user.name : ""}, Welcome to Campground
          </h1>
          <h1 className="text-[32px]">
            Camping is a form of outdoor recreation or outdoor education
            involving overnight stays with a basic temporary shelter such as a
            tent. Camping can also include a recreational vehicle, sheltered
            cabins, a permanent tent, a shelter such as a bivy or tarp, or no
            shelter at all. Typically, participants leave developed areas to
            spend time outdoors, in pursuit of activities providing them
            enjoyment or in a form of educational experience. Spending the night
            away from home distinguishes camping from day-tripping, picnicking,
            and other outdoor activities.
          </h1>
        </div>
      </div>
    </div>
  );
}
