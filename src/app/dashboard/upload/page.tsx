"use client";

import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";
import type { CloudinaryUploadWidgetResults } from "next-cloudinary";
import { Button } from "@/components/ui/button";

export default function UploadPage() {
  const [publicId, setPublicId] = useState<string | null>(null);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Upload</h1>
      <p className="text-muted-foreground">
        Upload your photos to the cloud
      </p>
      
      <div className="flex flex-col gap-4 mt-4">
        <Button asChild>
          <CldUploadButton 
            uploadPreset="photo-rama" 
            onSuccess={(result: CloudinaryUploadWidgetResults) => {
              if (typeof result.info !== 'string') {
                setPublicId(result.info?.public_id ?? null);
              }
            }} 
          />
        </Button>
        
        {publicId && (
          <CldImage 
            src={publicId} 
            alt="Description of image" 
            width="640" 
            height="800" 
            sizes="100vw" 
          />
        )}
      </div>
    </div>
  );
}