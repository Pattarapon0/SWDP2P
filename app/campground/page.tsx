"use client";

import getCampground from "@/lib/getCampGrounds";
import { CampGroundCard } from "@/components/ui/campGroundCard";
import CreateCampGroundCard from "@/components/ui/createCampGroundCard";
import { Suspense } from "react";
import { useState, useEffect } from "react";
interface CampGroundCardProps {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel: string;
  picture: string;
}

export default function CampgroundPage() {
  const [isDelete, setIsDelete] = useState(false);
  const [campgrounds, setCampgrounds] = useState<CampGroundCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCampground();
      setCampgrounds(response.data);
      setIsDelete(false);
    };
    fetchData();
  }, [isDelete]);

  return (
    <div className="p-5">
      <div className="text-2xl text-red-500">Campground Page</div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-4 gap-4">
          {campgrounds.map((item: CampGroundCardProps) => (
            <CampGroundCard
              key={item._id}
              item={{
                _id: item._id,
                name: item.name,
                address: item.address,
                district: item.district,
                province: item.province,
                postalCode: item.postalcode,
                tel: item.tel,
                picture: item.picture,
                __v: 0,
                id: item._id,
              }}
              hadleDelete={() => setIsDelete(true)}
            />
          ))}
          <CreateCampGroundCard />
        </div>
      </Suspense>
    </div>
  );
}
