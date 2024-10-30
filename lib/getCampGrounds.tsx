import dotenv from 'dotenv'
dotenv.config()
interface CampGround {
    data: {
        _id: string,
        name: string,
        address:string,
        district:string,
        province:string,
        postalCode:string,
        tel:string,
        picture:string

    }
}
export default async function getCampground() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/campgrounds`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!res.ok) {
        throw new Error("Something went wrong")
    }
    const data = await res.json()
    if (data) {
        return data
    }
}