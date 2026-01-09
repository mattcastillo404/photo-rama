"use client";

import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Upload as UploadIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export function UploadButton() {
 const router = useRouter();

  return (
    <Button asChild>
      <CldUploadButton uploadPreset="photo-rama" onSuccess={() => {
        setTimeout(() => {
          console.log('refresh')
          router.refresh();
        }, 1500);
      }}>
        <UploadIcon className="size-4" />
        Upload
      </CldUploadButton>
    </Button>
  );
}

