import { auth } from "../auth";
export default async function createCampGround(
    id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    token: string
) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/campgrounds`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ name, address, district, province, postalcode, tel, picture }),
    });
    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    const data = await res.json();
    if (data) {
        return data;
    }
}