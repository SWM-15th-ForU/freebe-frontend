import { Item } from "product-types";
import AdditionInfo from "@/components/common/addition-info";
import infoItemStyles from "./info.css";

const ProductItem = ({ content, title, description }: Item) => {
  return (
    <div className={infoItemStyles.wrapper}>
      <div className={infoItemStyles.titleWrapper}>
        <span className={infoItemStyles.title}>{title}</span>
        {description && <AdditionInfo content={description} size={16} />}
      </div>
      <span className={infoItemStyles.content}>{content}</span>
    </div>
  );
};

export default ProductItem;
