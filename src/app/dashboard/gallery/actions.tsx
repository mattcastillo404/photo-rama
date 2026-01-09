"use server";

import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export async function setAsFavoriteAction(publicId: string, isFavorite: boolean, path: string) {
  
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
    console.log(`Added favorite tag to ${publicId}`);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
    console.log(`Removed favorite tag from ${publicId}`);
  }
  await new Promise(resolve => setTimeout(resolve, 2000));

  revalidatePath(path);
}