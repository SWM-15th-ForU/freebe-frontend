import { CustomerDetails, Option } from "reservation-types";
import { infoStyles } from "./infos.css";

const OptionItem = ({ price, quantity, title }: Option) => {
  return (
    <div className={infoStyles.item}>
      <span className={infoStyles.name}>{title}</span>
      <span className={infoStyles.content}>{quantity}</span>
      <span className={infoStyles.content}>{price}원</span>
    </div>
  );
};

const OptionInfos = ({ options }: Pick<CustomerDetails, "options">) => {
  return (
    <div className={infoStyles.container}>
      <span className={infoStyles.title}>추가 옵션</span>
      <div className={infoStyles.wrapper}>
        {options.map((info) => (
          <OptionItem key={info.title} {...info} />
        ))}
      </div>
    </div>
  );
};

export default OptionInfos;
