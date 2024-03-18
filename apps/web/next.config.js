/** @type {import('next').NextConfig} */

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
}
