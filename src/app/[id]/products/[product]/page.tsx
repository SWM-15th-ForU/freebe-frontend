"use client";

import ProductInfo from "@/containers/customer/products/info";
import { Product } from "product-types";
import "@mantine/carousel/styles.css";
import ProductHeaderLayout from "@/containers/ui/product-header-layout";
import { PRODUCT_PROGRESS } from "@/constants/customer/product";

const ProductPage = ({ params }: { params: { productId: number } }) => {
  const productData: Product = {
    images: [],
    title: "스냅 이름",
    subtitle:
      "상품 소개글 상품 소개글 상품 소개글 상품 소개글 상품 소개글 상품 소개글 상품 소개글 상품 소개글 상품 소개글 상품 소개글 상품 소개글 상품 소개글 상품 소개글 상품 소개글 상품 소개글 상품 소개글",
    items: [
      {
        content: "보정본 4장 +_ 네컷 or ID카드 3종 + 원본 전체",
        hasDescription: true,
        title: "정보1",
        description:
          "보정본을 추가할 때는 옵션을 선택해 주세요보정본을 추가할 때는 옵션을 선택해 주세요보정본을 추가할 때는 옵션을 선택해 주세요",
      },
      {
        content: "",
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
        title: "보정본 추가(1장)",
        isFree: false,
        price: 10000,
        hasDescription: true,
        description: "보정본을 추가합니다~",
      },
    ],
    discounts: [],
  };

  const imageData = ["", "", ""];

  return (
    <ProductHeaderLayout
      header={{
        title: "상품 조회",
        progress: {
          total: PRODUCT_PROGRESS.total,
          current: PRODUCT_PROGRESS.info,
        },
      }}
    >
      <ProductInfo {...productData} />
    </ProductHeaderLayout>
  );
};

export default ProductPage;
