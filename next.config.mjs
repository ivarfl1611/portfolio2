// get env variable
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

/** @type {import('next').NextConfig} */
const nextConfigProd = {
  output: 'export',
  distDir: 'out',
  basePath: '/portfolio2',
  images: {
    loader: 'custom',
    loaderFile: './src/lib/image.loader.js',
  },
};

/** @type {import('next').NextConfig} */
const nextConfigDev = {};

const nextConfig = env === 'development' ? nextConfigDev : nextConfigProd;

export default nextConfig;
