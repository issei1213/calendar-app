/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withTM = require('next-transpile-modules')([
  '@fullcalendar/core',
  '@fullcalendar/daygrid',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/common',
]);

module.exports = withTM({
  reactStrictMode: true,
});
// module.exports = nextConfig;
