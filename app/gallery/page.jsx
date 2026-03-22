import fs from 'fs';
import path from 'path';
import GalleryClient from './GalleryClient';

export default async function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  let categoriesData = [];

  try {
    if (fs.existsSync(galleryDir)) {
      const categories = fs.readdirSync(galleryDir);
      
      categoriesData = categories
        .filter(cat => {
          const catPath = path.join(galleryDir, cat);
          return fs.statSync(catPath).isDirectory();
        })
        .map(cat => {
          const catPath = path.join(galleryDir, cat);
          const files = fs.readdirSync(catPath);
          
          const images = files
            .filter(file => {
              const ext = path.extname(file).toLowerCase();
              return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
            })
            .map(file => `/gallery/${cat}/${file}`); // Path for public folder in Next.js
            
          return {
            category: cat,
            images: images
          };
        });
    }
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

  // Get total image count for 'All' view or statistics if needed
  const totalImagesCount = categoriesData.reduce((sum, cat) => sum + cat.images.length, 0);

  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <GalleryClient categoriesData={categoriesData} />
      </div>
    </div>
  );
}
