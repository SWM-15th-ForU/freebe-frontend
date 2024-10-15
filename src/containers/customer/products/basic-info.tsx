import { Product } from "product-types";
import ProductItem from "./info/product-item";
import ProductOption from "./info/product-option";
import { infoStyles } from "./products.css";

const BasicInfo = ({ items, options }: Pick<Product, "items" | "options">) => {
  return (
    <div>
      <div className={infoStyles.wrapper}>
        <div className={infoStyles.itemsWrapper}>
          {items.map((item, index) => {
            return <ProductItem key={index} {...item} />;
          })}
        </div>
      </div>
      <div className={infoStyles.wrapper}>
        <p className={infoStyles.subtitle}>추가 옵션</p>
        <div className={infoStyles.itemsWrapper}>
          {options.map((option, index) => {
            return <ProductOption key={index} {...option} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
