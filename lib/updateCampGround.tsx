export default async function updateCampground( id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    token: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/campgrounds/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            name,
            address,
            district,
            province,
            postalcode,
            tel,
            picture
        })
    })
    if (!res.ok) {
        console.log(res)
        throw new Error("Failed to update campground")
    }
    return await res.json()

}