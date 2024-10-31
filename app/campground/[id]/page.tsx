'use client'
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
interface CampGroundCardProps {
    _id: string;
    name: string;
    address: string;
    district: string;
    province: string;
    postalCode: string;
    tel: string;
    picture: string;
    __v: number;
    id : string;
  }
export default function DetailPage() {
    const item: CampGroundCardProps = {
        _id: useSearchParams().get('id') as string,
        name: useSearchParams().get('name') as string,
        address: useSearchParams().get('address') as string,
        district: useSearchParams().get('district') as string,
        province: useSearchParams().get('province') as string,
        postalCode: useSearchParams().get('postalCode') as string,
        tel: useSearchParams().get('tel') as string,
        picture: useSearchParams().get('picture') as string,
        __v: parseInt(useSearchParams().get('__v') as string),
        id: useSearchParams().get('id') as string,
    }
    console.log(item.postalCode)
    return (
    <div className='min-h-screen  flex flex-col items-center p-8 gap-8'>
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300">
            <div className="relative w-full h-[500px] mb-8">
                <Image 
                    src={item.picture} 
                    alt={item.name} 
                    fill
                    className="rounded-xl object-cover shadow-lg hover:scale-[1.02] transition-transform duration-300"
                />
            </div>
            <div className="text-center space-y-6">
                <h1 className="text-4xl font-bold text-green-800 hover:text-green-700 transition-colors duration-300">
                    campground name: {item.name}
                </h1>
                <div className="space-y-3 text-gray-700">
                    <div className="flex items-center justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-xl">address: {item.address}</p>
                    </div>
                    <p className="text-xl">district: {item.district}</p>
                    <p className="text-xl">province: {item.province}</p>
                    <p className="text-xl">postal code: {item.postalCode}</p>
                    <div className="flex items-center justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p className="text-xl hover:text-green-600 transition-colors duration-300">
                            campground tel: {item.tel}
                        </p>
                    </div>
                    <div className="mt-8 flex justify-center space-x-4">
                                            <Link href="/booking" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                Book Now
                                            </Link>
                                            <Link href="/campground" className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-300 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                                </svg>
                                                Back
                                            </Link>
                                        </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}