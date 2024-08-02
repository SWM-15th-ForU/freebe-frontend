"use client";

import ProductInfo from "@/containers/product/product-info";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { Product } from "product-types";

const ProductPage = ({ params }: { params: { product: string } }) => {
  const productData: Product = {
    title: "스냅 이름",
    discounts: [],
    images: [],
    items: [],
    options: [],
    subtitle: "스냅 소개글",
  };

  const imageData = ["", "", ""];

  return (
    <div style={{ width: "100%" }}>
      <Carousel withIndicators height={200} slideSize={100}>
        {imageData.map((image, index) => {
          return <Carousel.Slide key={index}>1</Carousel.Slide>;
        })}
      </Carousel>
      <p>{params.product}</p>
      <ProductInfo {...productData} />
    </div>
  );
};

export default ProductPage;
