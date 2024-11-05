"use client";

import { carouselStyles } from "@/styles/mantine.css";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useEffect, useState } from "react";
import {
  customedCarouselStyles,
  noticeBannerStyles,
} from "./notice-banner.css";

type BannerTargets = "join" | "main";

type Banner = {
  image: string;
  link?: string;
} & {
  [key in BannerTargets]: boolean;
};

const NoticeBanner = ({
  container,
  target,
}: {
  container?: CSSProperties;
  target: BannerTargets;
}) => {
  const [bannerDatas, setBannerDatas] = useState<Banner[]>([]);

  useEffect(() => {
    const dataLayer = (window as any).dataLayer || [];
    const bannerData = dataLayer.find(
      (data: any) => data.event === "loadBannerData",
    )?.bannerData;
    if (bannerData) setBannerDatas(bannerData);
  }, []);

  return (
    <Carousel
      withIndicators
      withControls={false}
      classNames={{ ...carouselStyles, ...customedCarouselStyles }}
      style={{ ...container }}
    >
      {bannerDatas
        .filter((data) => data[target])
        .map((banner, index) => (
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
