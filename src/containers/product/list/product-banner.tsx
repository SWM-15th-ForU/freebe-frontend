"use client";

import Image from "next/image";
import { Switch } from "@mantine/core";
import { ProductResponseData } from "@/services/server/photographer/mypage/products";
import { putProductStatus } from "@/services/client/photographer/products";
import { Body15SB } from "@/components/texts/texts";
import { bannerDiv } from "../product.css";

const ProductBanner = ({
  // TODO: getProductList response에서 추가되는 이미지 받아오기
  activeStatus,
  productId,
  productTitle,
  reservationCount,
}: ProductResponseData) => {
  async function handleSwitchOpen() {
    await putProductStatus(productId, activeStatus);
  }

  return (
    <div className={bannerDiv}>
      {/* <Image src={image} alt="상품 메인 이미지" style={{ width: 70 }} /> */}
      <div style={{ flex: 1 }}>
        <Body15SB>{productTitle}</Body15SB>
        <Body15SB>누적 예약 건수 {reservationCount} 건</Body15SB>
        <Switch
          checked={activeStatus === "ACTIVE"}
          onChange={handleSwitchOpen}
        />
      </div>
    </div>
  );
};

export default ProductBanner;
