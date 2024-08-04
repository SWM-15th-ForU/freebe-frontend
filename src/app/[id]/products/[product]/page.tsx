"use client";

import ProductInfo from "@/containers/product/product-info";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { Product } from "product-types";
import "@mantine/carousel/styles.css";

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
    <div
      style={{
        width: "100%",
        overflowY: "scroll",
        maxHeight: "932px",
        paddingTop: "140px",
      }}
    >
      <Carousel
        withIndicators
        style={{
          width: "100%",
          height: "100vw",
          backgroundColor: "#d9d9d9",
        }}
      >
        {imageData.map((image, index) => {
          return <Carousel.Slide key={index} />;
        })}
      </Carousel>
      <ProductInfo {...productData} />
    </div>
  );
};

export default ProductPage;
