import { SearchResult } from "../src/app/dashboard/gallery/page";

const MAX_COLUMNS = 4;

export function ImageGrid({ 
  images, 
  getImage 
}: { 
  images: SearchResult[], 
  getImage: (imageData: SearchResult) => React.ReactNode; 
}) {

  function getColumns(columnNumber: number) {
    return images.filter((_, index) => index % MAX_COLUMNS === columnNumber);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-start">

    {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((column, index) => (
      <div key={index} className="flex flex-col gap-4">
        {column.map((imageData: SearchResult) => (
          getImage(imageData)
        ))}
      </div>
    ))}
  </div>
  )
}