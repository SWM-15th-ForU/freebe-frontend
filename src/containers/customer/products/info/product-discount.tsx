import { Discount } from "product-types";
import AdditionInfo from "@/components/common/addition-info";

const ProductDiscount = ({
  discountType,
  title,
  description,
  discountValue,
}: Discount) => {
  return (
    <div>
      <span>{title}</span>
      {description && <AdditionInfo content={description} size={16} />}
      {discountType === "AMOUNT" ? (
        <span>{discountValue?.toLocaleString()}원 할인</span>
      ) : (
        <span>{discountValue}% 할인</span>
      )}
    </div>
  );
};

export default ProductDiscount;
