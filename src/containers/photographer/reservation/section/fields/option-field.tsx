import { Option } from "reservation-types";
import { formatPrice } from "@/utils/parse";
import { fieldStyles } from "../section.css";

const OptionField = ({ option }: { option: Option }) => {
  return (
    <div className={fieldStyles.option}>
      <span className={fieldStyles.name}>{option.title}</span>
      <span className={fieldStyles.name}>{option.quantity}</span>
      <span className={fieldStyles.content}>{formatPrice(option.price)}</span>
    </div>
  );
};

export default OptionField;
