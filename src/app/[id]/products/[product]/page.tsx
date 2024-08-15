"use client";

import ProductInfo from "@/containers/product/product-info";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { Product } from "product-types";
import "@mantine/carousel/styles.css";

const ProductPage = ({ params }: { params: { product: string } }) => {
  const productData: Product = {
    images: [],
    title: "스냅 이름",
    subtitle: "스냅 소개글",
    items: [
      {
        content: "내용",
        hasDescription: true,
        title: "정보1",
        description: "설명",
      },
      {
        content: "내용",
        hasDescription: false,
        title: "정보2",
      },
      {
        content: "내용",
        hasDescription: false,
        title: "정보3",
      },
    ],
    options: [],
    discounts: [],
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
