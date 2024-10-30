'use client'
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
export default function CreateCampGroundCard() {
    const router = useRouter();
    return (
    <Card className="w-full max-w-sm pt-5">
        <CardContent>
            <div className="flex flex-col items-center justify-center h-48 border-2 border-dashed rounded-lg cursor-pointer hover:border-gray-400" onClick={() => router.push("/campground/create")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span className="mt-2 text-sm text-gray-500">Create New Campground</span>
            </div>
        </CardContent>
    </Card>
  );
}