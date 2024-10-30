"use client"
import CampgroundForm from "@/components/ui/campGroundForm";
import createCampGround from "@/lib/createCampGround";
export default function CampgroundCreatePage() {
 
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Create New Campground</h1>
        <CampgroundForm item={undefined} hadleSubmit={createCampGround}/>
      </div>
    </div>
  );
}