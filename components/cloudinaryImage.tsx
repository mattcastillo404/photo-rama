"use client";

import { CldImage } from "next-cloudinary";
import { HeartIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { setAsFavoriteAction } from "../src/app/dashboard/gallery/actions";
import { useTransition } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CloudinaryImage(props: any) {
  const [transition, startTransition] = useTransition();

  const { publicId, path, ...otherProps } = props;

  const isFavorite = props.tags.includes('favorite');

  const handleSetAsFavorite = () => {
    startTransition(() => {
      setAsFavoriteAction(publicId as string, isFavorite ? false : true, path);
    });
  }

  return (
    <div className="relative aspect-square  rounded-lg w-full h-full">
      <CldImage 
        {...otherProps}
        className="object-cover h-full w-full z-0 relative"
      />
      <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center ">
        <Button className="rounded-full z-10 m-0" variant="secondary" size="icon" onClick={() => {
          handleSetAsFavorite();
        }}>
          {isFavorite ? (
            <HeartIcon 
              className="size-4"
              weight="fill"
            />
          ) : (
            <HeartIcon 
              className="size-4"
              weight="regular"
            />
          )}
        </Button>
      </div>
    </div>
  )
}