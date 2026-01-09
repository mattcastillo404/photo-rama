"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
import { HeartIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { setAsFavoriteAction } from "../src/app/dashboard/gallery/actions";
import { useTransition, useState } from "react";
import { SearchResult } from "../src/app/dashboard/gallery/page";

export function CloudinaryImage(
  props: {
    imageData: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & CldImageProps
) {
  const [transition, startTransition] = useTransition();

  const { imageData, onUnheart } = props;

  const [isFavorite, setIsFavorite] = useState(
    imageData.tags.includes('favorite')
  );

  const handleSetAsFavorite = () => {
    setAsFavoriteAction(imageData.public_id, isFavorite ? false : true);
  }

  return (
    <div className="relative">
      <CldImage 
        src={imageData.public_id}
        alt={imageData.public_id}
        sizes="100vw"
        width="400"
        height="300"
        className="relative"
      />
      <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center ">
        {isFavorite ? (
          <Button className="rounded-full z-10 m-0" variant="secondary" size="icon" onClick={() => {
            onUnheart?.(imageData);
            setIsFavorite(!isFavorite);
            startTransition(() => {
              handleSetAsFavorite();
            });
          }}>
            <HeartIcon 
              className="size-4"
              weight="fill"
            />
          </Button>
        ) : (
          <Button className="rounded-full z-10 m-0" variant="secondary" size="icon" onClick={() => {
            setIsFavorite(!isFavorite);
            startTransition(() => {
              handleSetAsFavorite();
            });
          }}>
            <HeartIcon 
              className="size-4"
              weight="regular"
            />
          </Button>
        )}
      </div>
    </div>
  )
}