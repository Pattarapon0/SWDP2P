'use client';
import createCampGround from "@/lib/createCampGround";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
export default function CampgroundCreatePage() {
const session = useSession();
 const [formData, setFormData] = useState({
    name: "",
    address: "",
    district: "",
    province: "",
    postalCode: "",
    tel: "",
    picture: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCampGround(
        formData.name,
        formData.address,
        formData.district,
        formData.province,
        formData.postalCode,
        formData.tel,
        formData.picture,
        session?.data?.user.token ?? ''
      );
    } catch (error) {
      console.error("Error creating campground:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Create New Campground</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-indigo-500 shadow-sm focus:border-indigo-700 focus:ring-indigo-700 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-indigo-500 shadow-sm focus:border-indigo-700 focus:ring-indigo-700 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
              <Input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-indigo-500 shadow-sm focus:border-indigo-700 focus:ring-indigo-700 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="province" className="block text-sm font-medium text-gray-700">Province</label>
              <Input
                type="text"
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-indigo-500 shadow-sm focus:border-indigo-700 focus:ring-indigo-700 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
              <Input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-indigo-500 shadow-sm focus:border-indigo-700 focus:ring-indigo-700 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="tel" className="block text-sm font-medium text-gray-700">Telephone</label>
              <Input
                type="tel"
                id="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-indigo-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="picture" className="block text-sm font-medium text-gray-700">Picture URL</label>
              <Input
                type="url"
                id="picture"
                name="picture"
                value={formData.picture}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-indigo-500 shadow-sm focus:border-indigo-700 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
            >
              Create Campground
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}