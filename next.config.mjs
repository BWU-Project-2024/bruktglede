/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // appDir: true,
        serverActions: true,
        basePath: '/',
    },
    env: {
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dmz24qiwu",
        NEXT_PUBLIC_CLOUDINARY_PRESET_NAME:"gfsyydiz",
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              pathname: '**',
            },
        ],
    },
    serverActions: {
        bodySizeLimit: '2mb' 
    }
};

export default nextConfig;
