'use client';
import React from 'react';
import { Button } from './button';
import { Card, CardContent, CardFooter, CardHeader } from './card';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Link  from 'next/link';

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

export function CampGroundCard({item} : {item: CampGroundCardProps}) {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === 'admin';
  return (
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <div className="relative h-full w-full">
          <Image
            src='/Cute_dog.jpg'
            alt={item.name}
            className="rounded-t-lg object-cover"
            width={500}
            height={500}
          />
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">camp ground name: {item.name}</h3>
      </CardContent>
      <CardFooter className="flex gap-2">
        {!isAdmin && (
          <Button onClick={()=>{}} variant="default">
            View
          </Button>
        )}
        {isAdmin && (
          <>
            <Link href={{pathname:`/campground/edit/${item.id}`, query:{...item}}} passHref>
            <Button  variant="outline">
              Edit
            </Button>
            </Link>
            <Button onClick={()=>{}} variant="destructive">
              Delete
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
