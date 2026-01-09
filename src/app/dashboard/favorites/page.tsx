import { CloudinaryImage } from "@/components/cloudinaryImage";
import cloudinary from 'cloudinary';

export default async function FavoritesPage() {
  const results = await cloudinary.v2.search
    .expression('resource_type:image AND tags:favorite')
    .sort_by('created_at','desc')
    .with_field('tags')
    .max_results(30)
    .execute() as { resources: SearchResult[] }

  type SearchResult = {
    public_id: string
    tags: string[]
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Favorites</h1>
      <p className="text-muted-foreground">
        Your favorite photos
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {results.resources.map( (result: SearchResult) => (
          <CloudinaryImage key={result.public_id} publicId={result.public_id} src={result.public_id} alt={result.public_id} width={400} height={400} sizes="100vw" tags={result.tags} path="/dashboard/favorites" />
        ))}
      </div>
    </div>
  );
}

