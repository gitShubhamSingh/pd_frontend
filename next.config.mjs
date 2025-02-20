/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '8000', // Match your development server port
            pathname: '/media/**', // Match the path where your images are served
          },
        ],
      },
};

export default nextConfig;
