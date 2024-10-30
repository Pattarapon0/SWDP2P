
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

export function CampGroundCard({ id, name, image, onView, onEdit, onDelete }: CampGroundCardProps) {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === 'admin';

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-t-lg object-cover"
          />
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">{name}</h3>
      </CardContent>
      <CardFooter className="flex gap-2">
        {!isAdmin && (
          <Button onClick={onView} variant="default">
            View
          </Button>
        )}
        {isAdmin && (
          <>
            <Button onClick={onEdit} variant="outline">
              Edit
            </Button>
            <Button onClick={onDelete} variant="destructive">
              Delete
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
