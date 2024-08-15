import AdditionInfo from "@/components/common/addition-info";
import { Option } from "product-types";
import infoItemStyles from "./info.css";

const ProductOption = ({ isFree, title, price, description }: Option) => {
  return (
    <div className={infoItemStyles.wrapper}>
      <div className={infoItemStyles.titleWrapper}>
        <span className={infoItemStyles.title}>{title}</span>
        {description && <AdditionInfo content={description} size={16} />}
      </div>
      <span className={infoItemStyles.price}>
        {isFree ? "무료 옵션" : `${price}원`}
      </span>
    </div>
  );
};

export default ProductOption;
