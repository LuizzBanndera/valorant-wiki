/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  reactStrictMode: true,
  images: {
    domains:['media.valorant-api.com'],
  },
  env: {
    url: 'https://valorant-api.com/v1'
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
  }
}
