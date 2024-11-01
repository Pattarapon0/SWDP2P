import Image from "next/image";
import ButtonM1 from "./buttonM1";

export default function CampGroundCardM1({
  name,
  id,
  ImageURL,
}: {
  name: string;
  id: string;
  ImageURL: string;
}) {
  if (ImageURL === "") {
    ImageURL = "/img/placeholder.png";
  }
  return (
    <div className="bg-white w-[320px] flex flex-col space-y-[24px] pb-[24px] rounded-[24px] shadow-xl overflow-hidden">
      <Image
        src={ImageURL}
        alt={name}
        width={320}
        height={180}
        className="w-full h-[180px] object-cover"
      />
      <div className="flex flex-col space-y-[24px] px-[16px]">
        <h1 className="text-[32px] font-bold text-blue-950">{name}</h1>
        <div className="flex justify-center">
          <ButtonM1 text="Detail" url={`/campground/${id}`} />
        </div>
      </div>
    </div>
  );
}
