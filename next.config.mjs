/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/artworks',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
