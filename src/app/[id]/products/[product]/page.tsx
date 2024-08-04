"use client";

import ProductInfo from "@/containers/product/product-info";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { Product } from "product-types";
import "@mantine/carousel/styles.css";

const ProductPage = ({ params }: { params: { product: string } }) => {
  const productData: Product = {
    title: "스냅 이름",
    discounts: [
      {
        discountType: "amount",
        hasDescription: true,
        title: "할인1",
        amount: 1000,
        description: "설명",
      },
      {
        discountType: "rate",
        hasDescription: false,
        title: "할인2",
        rate: 10,
      },
    ],
    images: [],
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
    options: [
      {
        isFree: true,
        title: "옵션1",
      },
      {
        isFree: false,
        title: "옵션2",
        price: 1000,
      },
    ],
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
