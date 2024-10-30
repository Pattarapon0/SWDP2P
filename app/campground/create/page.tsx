'use client';
import createCampGround from "@/lib/createCampGround";
import { useState } from "react";
import { useSession } from "next-auth/react";
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
    <div>
      <h1>Create Campground</h1>
      <form className="flex flex-col gap-4 text-black" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="district">District:</label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="province">Province:</label>
          <input
            type="text"
            id="province"
            name="province"
            value={formData.province}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tel">Telephone:</label>
          <input
            type="text"
            id="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="picture">Picture URL:</label>
          <input
            type="text"
            id="picture"
            name="picture"
            value={formData.picture}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Campground</button>
      </form>
    </div>
  );
}