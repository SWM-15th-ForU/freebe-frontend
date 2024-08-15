import { Product } from "product-types";
import { Body15SB } from "@/components/texts/texts";
import { SubmitButton } from "@/components/buttons/common-buttons";
import ProductItem from "./info/product-item";
import ProductOption from "./info/product-option";
import ProductDiscount from "./info/product-discount";
import { infoContainer, infoStyle } from "./products.css";

const ProductInfo = ({
  discounts,
  items,
  options,
  subtitle,
  title,
}: Omit<Product, "images">) => {
  const handleStartReservation = () => {};

  return (
    <div className={infoContainer}>
      <Body15SB>{title}</Body15SB>
      <Body15SB>{subtitle}</Body15SB>
      <Body15SB>촬영 정보</Body15SB>
      <div className={infoStyle.wrapper}>
        {items.map((item, index) => {
          return <ProductItem key={index} {...item} />;
        })}
      </div>
      <Body15SB>추가 옵션</Body15SB>
      <div className={infoStyle.wrapper}>
        {options.map((option, index) => {
          return <ProductOption key={index} {...option} />;
        })}
      </div>
      <Body15SB>할인 정보</Body15SB>
      <div className={infoStyle.wrapper}>
        {discounts.map((discount, index) => {
          return <ProductDiscount key={index} {...discount} />;
        })}
      </div>
      <SubmitButton title="예약 시작하기" onClick={handleStartReservation} />
    </div>
  );
};

export default ProductInfo;
