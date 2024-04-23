/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {     NEXTAUTH_SECRET: 'yourSecretKey',
               NEXTAUTH_URL: 'http://localhost:3001'   }
};

export default nextConfig;
