// "use client";

import getCampground from "@/lib/getCampGrounds";
import { CampGroundCard } from "@/components/ui/campGroundCard";
import CreateCampGroundCard from "@/components/ui/createCampGroundCard";
import { Suspense, useState, useEffect } from "react";
import CampGroundCardM1 from "@/components/newUi/campGroundCardM1";
import { useSearchParams } from "next/navigation";
// import transformDriveURL from "../util/transformDriveURL";
import transformDriveURL from "@/util/transformDriveURL";
import CampGroundCardM1Admin from "@/components/newUi/campGroundCardM1Admin";
import getUserRole from "@/util/getUserRole";
import { auth } from "@/auth";

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

export default async function CampgroundPage() {
  // const campgrounds = await getCampground();
  const campgroundsResponse = await getCampground();
  const campgrounds = campgroundsResponse.data; // Adjust based on your actual response structure

  const role = await getUserRole(); // Get user role from auth
  const session = await auth();
  const isAdmin = session?.user.role === "admin";
  // const [isDelete, setIsDelete] = useState(false);
  // const [campgrounds, setCampgrounds] = useState<CampGroundCardProps[]>([]);
  // const [isAdmin, setIsAdmin] = useState<boolean>(false);
  // const [role, setRole] = useState<string>("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getCampground();
  //     setCampgrounds(response.data);
  //     setIsDelete(false);
  //   };

  //   // Fetch user role and set isAdmin
  //   const fetchUserRole = async () => {
  //     const role = await getUserRole();
  //     setIsAdmin(role === "admin");
  //     setRole(role);
  //   };

  //   fetchData();
  //   fetchUserRole();
  // }, [isDelete]);

  return (
    <div className="py-[32px]">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex justify-center">
          {/* <div>{role}</div> */}
          <div className="grid grid-cols-4 gap-[32px]">
            {campgrounds.map((item: CampGroundCardProps) => (
              <CampGroundCardM1
                key={item._id}
                name={item.name}
                ImageURL={transformDriveURL(item.picture)}
                id={item._id}
              />
            ))}

            {isAdmin ? <CampGroundCardM1Admin /> : null}
            {/* <CreateCampGroundCard /> */}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
