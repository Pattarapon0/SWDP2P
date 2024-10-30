import getCampground from "@/lib/getCampGrounds"
import { CampGroundCard } from "@/components/ui/campGroundCard";
import CreateCampGroundCard from "@/components/ui/createCampGroundCard";
export default async function CampgroundPage() {
  const res = await getCampground()
  const data = await res.data
  console.log(data)
    return (
    <div className="p-5">
      <div className="text-2xl text-red-500">Campground Page</div>
        <div className="grid grid-cols-4 gap-4">
        {
          data?.map((item: any) => (
            <CampGroundCard
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.picture}
            />
          ))
        }
        <CreateCampGroundCard />
        </div>
      </div>
    )
}