"use client"

import CampgroundForm from "@/components/ui/campGroundForm";
import { useSearchParams } from 'next/navigation'
import updateCampground from "@/lib/updateCampGround";
interface CampGroundCardProps {
    _id: string;
    name: string;
    address: string;
    district: string;
    province: string;
    postalCode: string;
    tel: string;
    picture: string;
  }
export default function CampgroundPage() {
    const item: CampGroundCardProps = {
        _id: useSearchParams().get('id') as string,
        name: useSearchParams().get('name') as string,
        address: useSearchParams().get('address') as string,
        district: useSearchParams().get('district') as string,
        province: useSearchParams().get('province') as string,
        postalCode: useSearchParams().get('postalCode') as string,
        tel: useSearchParams().get('tel') as string,
        picture: useSearchParams().get('picture') as string,
    }
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Edit Campground</h1>
        <CampgroundForm item={item} hadleSubmit={updateCampground}/>
      </div>
    </div>
    );
}