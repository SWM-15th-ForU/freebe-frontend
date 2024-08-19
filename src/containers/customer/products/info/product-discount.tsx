import { Discount } from "product-types";

const ProductDiscount = ({
  discountType,
  hasDescription,
  title,
  description,
  discountValue,
}: Discount) => {
  return (
    <div>
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
