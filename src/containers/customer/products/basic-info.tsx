import { Product } from "product-types";
import ProductItem from "./info/product-item";
import ProductOption from "./info/product-option";
import { infoStyles } from "./products.css";

const BasicInfo = ({
  items,
  options,
  basicPlace,
  allowPreferredPlace,
}: Pick<
  Product,
  "items" | "options" | "basicPlace" | "allowPreferredPlace"
>) => {
  return (
    <div>
      <div className={infoStyles.wrapper}>
        <div className={infoStyles.itemsWrapper}>
          <ProductItem
            key="basic-place"
            title="촬영 장소"
            content={basicPlace}
            description={
              allowPreferredPlace ? "신청 시 희망 장소 요청 가능" : ""
            }
          />
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
