import { auth } from "@/auth"
import getCampground from "@/lib/getCampGrounds"
import { CampGroundCard } from "@/components/ui/campGroundCard";
export default async function CampgroundPage() {
  const data = await getCampground();
    return (
    <div>
      <h1>Campground Page</h1>
      {!data? <h1>loading</h1>:
      data((item) => (
          <CampgroundPage key={item.id}></CampgroundPage>
      ))}
    </div>
  )
}