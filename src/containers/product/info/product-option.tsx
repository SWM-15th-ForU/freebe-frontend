import { Option } from "product-types";
import { infoStyle } from "../product.css";

const ProductOption = ({ isFree, title, price }: Option) => {
  return (
    <div className={infoStyle.container}>
      <span>{title}</span>
      {isFree ? <span>무료 옵션</span> : <span>{price}원 추가</span>}
    </div>
  );
};

export default ProductOption;
