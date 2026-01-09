
import { UploadButton } from "@/components/upload-button";
import cloudinary from 'cloudinary';
import { CloudinaryImage } from "../../../../components/cloudinaryImage";
import { ForceRefresh } from '@/components/force-refresh';

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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {results.resources.map( (result: SearchResult) => (
          <CloudinaryImage 
            key={result.public_id} 
            imageData={result as SearchResult}
            alt={result.public_id}
            src={result.public_id}
          />
        ))}
      </div>
    </div>
  );
}