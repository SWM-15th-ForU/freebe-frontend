"use client";

import { carouselStyles } from "@/styles/mantine.css";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import {
  customedCarouselStyles,
  noticeBannerStyles,
} from "./notice-banner.css";

const NoticeBanner = ({
  container,
  target,
}: {
  container?: CSSProperties;
  target: "join" | "main";
}) => {
  const bannerDatas = {
    join: [
      {
        image:
          "https://local-freebe-data.s3.ap-northeast-2.amazonaws.com/service-banner/join-banner.png",
        link: undefined,
      },
    ],
    main: [
      {
        image:
          "https://local-freebe-data.s3.ap-northeast-2.amazonaws.com/service-banner/main-banner.png",
        link: "https://slashpage.com/freebe/xjqy1g2vqrk4dm6vd54z",
      },
    ],
  };
  return (
    <Carousel
      withIndicators
      withControls={false}
      classNames={{ ...carouselStyles, ...customedCarouselStyles }}
      style={{ ...container }}
    >
      {bannerDatas[target].map((banner, index) => (
        <Carousel.Slide key={index}>
          {banner.link ? (
            <Link target="_blank" href={banner.link}>
              <Image
                alt={`banner image ${index}`}
                src={banner.image}
                fill
                className={noticeBannerStyles.image}
              />
            </Link>
          ) : (
            <Image
              alt={`banner image ${index}`}
              src={banner.image}
              fill
              className={noticeBannerStyles.image}
            />
          )}
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default NoticeBanner;
