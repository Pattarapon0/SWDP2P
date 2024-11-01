import { auth } from "@/auth";

export default async function getUserRole(): Promise<string> {
  const session = await auth();
  console.log("Session Data:", session); // Log session data
  if (session) {
    const role = session.user.role;
    return role;
  }

  return "user";
}
