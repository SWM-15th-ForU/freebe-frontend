import { Item } from "product-types";
import { infoStyle } from "../products.css";

const ProductItem = ({ content, hasDescription, title, description }: Item) => {
  return (
    <div className={infoStyle.container}>
      <span>{title}</span>
      {hasDescription && <span>{description}</span>}
      <span>{content}</span>
    </div>
  );
};

export default ProductItem;
