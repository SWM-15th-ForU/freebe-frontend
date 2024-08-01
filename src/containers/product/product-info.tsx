import { Product } from "product-types";
import { infoContainer } from "./product.css";

const ProductInfo = ({
  discounts,
  items,
  options,
  subtitle,
  title,
}: Omit<Product, "images">) => {
  return <div className={infoContainer} />;
};

export default ProductInfo;
