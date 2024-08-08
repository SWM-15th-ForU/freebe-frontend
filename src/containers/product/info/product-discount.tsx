import { Discount } from "product-types";
import { infoStyle } from "../product.css";

const ProductDiscount = ({
  discountType,
  hasDescription,
  title,
  amount,
  description,
  rate,
}: Discount) => {
  return (
    <div className={infoStyle.container}>
      <span>{title}</span>
      {hasDescription && <span>{description}</span>}
      {discountType === "amount" ? (
        <span>{amount}원 할인</span>
      ) : (
        <span>{rate}% 할인</span>
      )}
    </div>
  );
};

export default ProductDiscount;
