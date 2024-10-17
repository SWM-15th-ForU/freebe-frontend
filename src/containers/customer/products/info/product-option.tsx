import { Option } from "product-types";
import AdditionInfo from "@/components/common/addition-info";
import { formatPrice } from "@/utils/parse";
import infoItemStyles from "./info.css";

const ProductOption = ({ isFree, title, price, description }: Option) => {
  return (
    <div className={infoItemStyles.wrapper}>
      <div className={infoItemStyles.titleWrapper}>
        <span className={infoItemStyles.title}>{title}</span>
        {description && <AdditionInfo content={description} size={16} />}
      </div>
      <span className={infoItemStyles.price}>{formatPrice(price, isFree)}</span>
    </div>
  );
};

export default ProductOption;
