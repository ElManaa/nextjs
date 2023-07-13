const path = require('path')
const withFonts = require('next-fonts');

/** @type {import('next').NextConfig} */
const nextConfig =withFonts({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    PORT: process.env.PORT,
    ENVIRONMENT: process.env.ENVIRONMENT,
    LOCAL_API_HOST: process.env.LOCAL_API_HOST,
    API_HOST: process.env.API_HOST,
    API_PORT: process.env.API_PORT,
    LOCAL_SOCKET_HOST: process.env.LOCAL_SOCKET_HOST,
    SOCKET_HOST: process.env.SOCKET_HOST,
    SOCKET_PORT: process.env.SOCKET_PORT,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
})

module.exports = nextConfig
