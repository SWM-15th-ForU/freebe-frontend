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
}: Pick<CustomerDetails, "productInfo">) => {
  return (
    <div className={infoStyles.container}>
      <span className={infoStyles.title}>촬영 정보</span>
      <div className={infoStyles.wrapper}>
        {productInfo.map((info) => (
          <ProductItem key={info.title} {...info} />
        ))}
      </div>
    </div>
  );
};

export default ProductInfos;
