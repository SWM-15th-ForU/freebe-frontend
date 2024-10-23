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

const NoticeBanner = ({ container }: { container?: CSSProperties }) => {
  const bannerDatas = [
    {
      image: "https://picsum.photos/1200/600",
      link: "https://slashpage.com/freebe",
    },
  ];
  return (
    <Carousel
      withIndicators
      withControls={false}
      classNames={{ ...carouselStyles, ...customedCarouselStyles }}
      style={{ ...container }}
    >
      {bannerDatas.map((banner, index) => (
        <Carousel.Slide key={index}>
          <Link target="_blank" href={banner.link}>
            <Image
              alt={`banner image ${index}`}
              src={banner.image}
              fill
              className={noticeBannerStyles.image}
            />
          </Link>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default NoticeBanner;
