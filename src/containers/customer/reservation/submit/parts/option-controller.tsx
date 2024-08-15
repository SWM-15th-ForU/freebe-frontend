import { reservation } from "product-types";
import CountInput from "@/components/inputs/count-input";
import CloseButton from "@/components/buttons/close-button";
import { optionControllerStyles } from "./parts.css";

interface OptionControllerProps {
  option: reservation.SelectedOption;
  onClickDelete: () => void;
  onChangeQuantity: (newQuantity: number) => void;
  isLast?: boolean;
}

const OptionController = ({
  isLast,
  option,
  onClickDelete,
  onChangeQuantity,
}: OptionControllerProps) => {
  return (
    <div
      className={
        isLast
          ? optionControllerStyles.lastContainer
          : optionControllerStyles.container
      }
    >
      <span className={optionControllerStyles.title}>{option.title}</span>
      <div className={optionControllerStyles.wrapper}>
        <CountInput
          value={option.quantity}
          setValue={(newValue) => onChangeQuantity(newValue)}
        />
        <span className={optionControllerStyles.price}>
          {option.price ? `${option.price}원` : "무료"}
        </span>
        <CloseButton onClick={onClickDelete} size={18} />
      </div>
    </div>
  );
};

export default OptionController;
