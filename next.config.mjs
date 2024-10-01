import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TODO: 이미지 허용 도메인 정리하기
    domains: [
      "picsum.photos",
      "example.com",
      "search.pstatic.net",
      "freebe-data.s3.ap-northeast-2.amazonaws.com",
      "cicd-backend-develop-bucket.s3.ap-northeast-2.amazonaws.com",
    ],
  },
  reactStrictMode: false,
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default withVanillaExtract(nextConfig);
