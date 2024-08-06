"use client";

import Image from "next/image";
import { Switch } from "@mantine/core";
import { Body15SB } from "@/components/texts/texts";
import { bannerDiv } from "../product.css";

interface ProductBannerProps {
  id: string;
  title: string;
  image: string;
  totalReservation: number;
  isOpen: boolean;
}

const ProductBanner = ({
  id,
  image,
  isOpen,
  title,
  totalReservation,
}: ProductBannerProps) => {
  function handleSwitchOpen() {}

  return (
    <div className={bannerDiv}>
      <Image src={image} alt="상품 메인 이미지" style={{ width: 70 }} />
      <div style={{ flex: 1 }}>
        <Body15SB>{title}</Body15SB>
        {/* [TODO] 예약 건수를 구하는 범위에 따라 문구 수정 필요 */}
        <Body15SB>예약 건수 {totalReservation} 건</Body15SB>
        <Switch checked={isOpen} onChange={handleSwitchOpen} />
      </div>
    </div>
  );
};

export default ProductBanner;