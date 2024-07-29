import Image from "next/image";
import { Switch } from "@mantine/core";
import { Body15SB } from "../texts/texts";
import { bannerDiv } from "./product.css";

interface ProductBannerProps {
  title: string;
  image: string;
  totalReservation: number;
  isOpen: boolean;
}

const ProductBanner = ({
  image,
  isOpen,
  title,
  totalReservation,
}: ProductBannerProps) => {
  function handleSwitchOpen() {}

  return (
    <div className={bannerDiv}>
      <Image src={image} alt="상품 메인 이미지" />
      <div>
        <Body15SB>{title}</Body15SB>
        <Body15SB>예약 건수 {totalReservation} 건</Body15SB>
        <Switch checked={isOpen} onChange={handleSwitchOpen} />
      </div>
    </div>
  );
};

export default ProductBanner;
