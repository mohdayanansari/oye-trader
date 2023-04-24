/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'i1.rgstatic.net',
      'media.licdn.com',
    ],
  },
};

module.exports = nextConfig;
