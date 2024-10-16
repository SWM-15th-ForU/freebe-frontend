import { CustomerDetails } from "reservation-types";
import { infoStyles } from "./infos.css";

const ProductItem = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className={infoStyles.item}>
      <span className={infoStyles.name}>{title}</span>
      <span className={infoStyles.content}>{content}</span>
    </div>
  );
};

const ProductInfos = ({
  productInfo,
  basicPlace,
}: Pick<CustomerDetails, "productInfo" | "basicPlace">) => {
  return (
    <div className={infoStyles.container}>
      <span className={infoStyles.title}>촬영 정보</span>
      <div className={infoStyles.wrapper}>
        <ProductItem key="basicPlace" title="촬영 장소" content={basicPlace} />
        {productInfo.map((info) => (
          <ProductItem key={info.title} {...info} />
        ))}
      </div>
    </div>
  );
};

export default ProductInfos;
