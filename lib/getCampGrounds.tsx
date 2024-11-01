
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