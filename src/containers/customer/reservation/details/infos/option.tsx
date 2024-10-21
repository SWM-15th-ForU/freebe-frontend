import { CustomerDetails, Option } from "reservation-types";
import { formatPrice } from "@/utils/parse";
import { infoStyles } from "./infos.css";

const OptionItem = ({ price, quantity, title }: Option) => {
  return (
    <div className={infoStyles.item}>
      <span className={infoStyles.name}>{title}</span>
      <span className={infoStyles.content}>{quantity}</span>
      <span className={infoStyles.content}>{formatPrice(price)}</span>
    </div>
  );
};

const OptionInfos = ({
  options,
  basicPrice,
}: Pick<CustomerDetails, "options" | "basicPrice">) => {
  return (
    <div className={infoStyles.container}>
      <span className={infoStyles.title}>예약 비용</span>
      <div className={infoStyles.wrapper}>
        <div className={infoStyles.item}>
          <span className={infoStyles.name}>기본 가격</span>
          <span className={infoStyles.content}>{formatPrice(basicPrice)}</span>
        </div>
        {options.map((info) => (
          <OptionItem key={info.title} {...info} />
        ))}
      </div>
    </div>
  );
};

export default OptionInfos;
