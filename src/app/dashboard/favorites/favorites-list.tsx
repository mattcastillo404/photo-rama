'use client';

import { CloudinaryImage } from '@/components/cloudinaryImage'
import { useState, useEffect } from 'react';
import { SearchResult } from '../gallery/page';

export default function FavoritesList({ initialResources } : {
  initialResources: SearchResult[];
}) {

  const [ resources, setResources ] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {resources.map( (result: SearchResult) => (
        <CloudinaryImage 
          key={result.public_id} 
          imageData={result as SearchResult}
          alt={result.public_id}
          src={result.public_id}
          onUnheart={(unheartedResource) => {
            setResources((currentResources) => 
              currentResources.filter(
                (resource) => resource.public_id !== unheartedResource.public_id
              )
            );
          }}
        />
      ))}
    </div>
  );
}