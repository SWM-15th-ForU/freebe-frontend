import { Discount } from "product-types";
import { infoStyle } from "../product.css";

const ProductDiscount = ({
  discountType,
  hasDescription,
  title,
  description,
  discountValue,
}: Discount) => {
  return (
    <div className={infoStyle.container}>
      <span>{title}</span>
      {hasDescription && <span>{description}</span>}
      {discountType === "AMOUNT" ? (
        <span>{discountValue}원 할인</span>
      ) : (
        <span>{discountValue}% 할인</span>
      )}
    </div>
  );
};

export default ProductDiscount;
