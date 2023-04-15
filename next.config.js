const path = require('path')
const withFonts = require('next-fonts');

/** @type {import('next').NextConfig} */
const nextConfig =withFonts({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }, 
})

module.exports = nextConfig
