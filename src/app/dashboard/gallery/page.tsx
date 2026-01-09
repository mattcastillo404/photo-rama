
import { UploadButton } from "@/components/upload-button";
import cloudinary from 'cloudinary';
import { ForceRefresh } from '@/components/force-refresh';
import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "@/components/cloudinaryImage";

export type SearchResult = {
  public_id: string
  tags: string[]
}

export default async function GalleryPage() {
  const results = await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at','desc')
    .with_field('tags')
    .max_results(30)
    .execute() as { resources: SearchResult[] }

  console.log(results);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <ForceRefresh />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Gallery</h1>
          <p className="text-muted-foreground">
            Browse all your photos
          </p>
        </div>
        <UploadButton />
      </div>
      
      <ImageGrid 
        images={results.resources} 
        getImage={(imageData: SearchResult) => {
          return (
            <CloudinaryImage 
              key={imageData.public_id} 
              imageData={imageData} 
              alt={imageData.public_id} 
              src={imageData.public_id}
              width="400"
              height="300"
            />
          )
        }}
      />
    </div>
  );
}