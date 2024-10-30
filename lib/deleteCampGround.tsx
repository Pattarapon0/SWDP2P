export default async function deleteCampGround(id: string, token: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/campgrounds/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Something went wrong")
}
const data = await res.json()
if (data) {
    return data
}}