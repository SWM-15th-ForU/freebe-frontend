"use client";

import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { Product } from "product-types";
import { BottomButton } from "@/components/buttons/common-buttons";
import ProductItem from "./info/product-item";
import ProductOption from "./info/product-option";
import { infoStyles } from "./products.css";

const ProductInfo = ({ items, options, subtitle, title, images }: Product) => {
  const handleStartReservation = () => {};

  return (
    <div className={infoStyles.container}>
      <Carousel
        withIndicators
        style={{
          position: "relative",
          width: "100%",
          height: "100vw",
          backgroundColor: "#d9d9d9",
        }}
      >
        {images.map((image, index) => {
          return (
            <Carousel.Slide key={index}>
              <Image src={image} alt="" fill />
            </Carousel.Slide>
          );
        })}
      </Carousel>
      <div className={infoStyles.wrapper}>
        <span className={infoStyles.title}>{title}</span>
        <p className={infoStyles.content}>{subtitle}</p>
      </div>
      <div className={infoStyles.wrapper}>
        <div className={infoStyles.itemsWrapper}>
          {items.map((item, index) => {
            return <ProductItem key={index} {...item} />;
          })}
        </div>
      </div>
      <div className={infoStyles.wrapper}>
        <p className={infoStyles.subtitle}>추가 옵션</p>
        <div className={infoStyles.itemsWrapper}>
          {options.map((option, index) => {
            return <ProductOption key={index} {...option} />;
          })}
        </div>
      </div>
      <BottomButton title="예약 시작하기" onClick={handleStartReservation} />
    </div>
  );
};

export default ProductInfo;
