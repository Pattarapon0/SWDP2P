import getCampground from "@/lib/getCampGrounds"
import { CampGroundCard } from "@/components/ui/campGroundCard";
import CreateCampGroundCard from "@/components/ui/createCampGroundCard";
interface CampGroundCardProps {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalCode: string;
  tel: string;
  picture: string;
  __v: number;
  id : string;
}
export default async function CampgroundPage() {
  const res = await getCampground()
  const data = await res.data
    return (
    <div className="p-5">
      <div className="text-2xl text-red-500">Campground Page</div>
        <div className="grid grid-cols-4 gap-4">
        {
          data?.map((item: CampGroundCardProps) => (
            console.log(item),
            <CampGroundCard
              key={item._id}
              item={item}
            />
          ))
        }
        <CreateCampGroundCard />
        </div>
      </div>
    )
}
