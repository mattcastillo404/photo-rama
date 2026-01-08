"use client";

import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";
import type { CloudinaryUploadWidgetResults } from "next-cloudinary";

export default function Home() {
  const [publicId, setPublicId] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <CldUploadButton 
          uploadPreset="photo-rama" 
          onSuccess={(result: CloudinaryUploadWidgetResults) => {
            if (typeof result.info !== 'string') {
              setPublicId(result.info?.public_id ?? null);
            }
          }} 
        />
        
        {publicId && (
          <CldImage 
            src={publicId} 
            alt="Description of image" 
            width="640" 
            height="800" 
            sizes="100vw" 
          />
        )}

      </main>
    </div>
  );
}