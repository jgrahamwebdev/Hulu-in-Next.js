/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //Gives permission to use images from the listed URL's
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
}

module.exports = nextConfig
