/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: 'https',
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: 'https',
                hostname: "bilsfexjzpaucbsfeiwc.supabase.co",
            },
        ]
    }
};

export default nextConfig;
