import FavoritesList from "./favorites-list";
import cloudinary from 'cloudinary';
import { ForceRefresh } from '@/components/force-refresh';
import { SearchResult } from '../gallery/page';

export default async function FavoritesPage() {
  const results = await cloudinary.v2.search
    .expression('resource_type:image AND tags:favorite')
    .sort_by('created_at','desc')
    .with_field('tags')
    .max_results(30)
    .execute() as { resources: SearchResult[] }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <ForceRefresh />

      <h1 className="text-2xl font-bold">Favorites</h1>
      <p className="text-muted-foreground">
        Your favorite photos
      </p>
      <FavoritesList initialResources={results.resources} />
    </div>
  );
}

