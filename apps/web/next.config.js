/** @type {import('next').NextConfig} */

const {
  RADIOBS_URL = 'https://radiobs.lugsoft.com.br:3001'
} = process.env

module.exports = {
  async redirects() {
    return [
      // redirect
      {
        source: '/',
        destination: '/radiobs',
        permanent: false,
      },
    ]
  },

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      // radiobs docs
      // {
      //   source: '/radiobs',
      //   destination: `${RADIOBS_URL}/radiobs`,
      // },
      // {
      //   source: '/radiobs/:path*',
      //   destination: `${RADIOBS_URL}/radiobs/:path*`,
      // }
    ]
  },
}
