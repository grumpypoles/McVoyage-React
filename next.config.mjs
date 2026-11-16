/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 75 is the default; 100 is used by GalleryHeader for the full-width hero image
    qualities: [75, 100],
  },
};

export default nextConfig;
