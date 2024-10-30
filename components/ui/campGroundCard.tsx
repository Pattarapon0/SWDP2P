'use client';
import React from 'react';
import { Button } from './button';
import { Card, CardContent, CardFooter, CardHeader } from './card';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

interface CampGroundCardProps {
  id: string;
  name: string;
  image: string;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function CampGroundCard({ id, name, image}: CampGroundCardProps) {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === 'admin';
  return (
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <div className="relative h-full w-full">
          <Image
            src='/Cute_dog.jpg'
            alt={name}
            className="rounded-t-lg object-cover"
            width={500}
            height={500}
          />
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">camp ground name: {name}</h3>
      </CardContent>
      <CardFooter className="flex gap-2">
        {!isAdmin && (
          <Button onClick={()=>{}} variant="default">
            View
          </Button>
        )}
        {isAdmin && (
          <>
            <Button onClick={()=>{}} variant="outline">
              Edit
            </Button>
            <Button onClick={()=>{}} variant="destructive">
              Delete
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
