"use client";

import ProductHeader from "@/containers/product/product-header";
import ProductInfo from "@/containers/product/product-info";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Product } from "product-types";

const ProductPage = () => {
  const productId = usePathname();

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
    <div>
      <ProductHeader products={[]} />
      <Carousel withIndicators height={200} slideSize={100}>
        {imageData.map((image, index) => {
          return <Carousel.Slide key={index}>1</Carousel.Slide>;
        })}
      </Carousel>
      <ProductInfo {...productData} />
    </div>
  );
};

export default ProductPage;
