import { reservation } from "product-types";
import CountInput from "@/components/inputs/count-input";
import CloseButton from "@/components/buttons/close-button";
import AdditionInfo from "@/components/common/addition-info";
import { formatPrice } from "@/utils/parse";
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
      <div className={optionControllerStyles.titleWrapper}>
        <span className={optionControllerStyles.title}>{option.title}</span>
        {option.description !== "" && (
          <AdditionInfo content={option.description} size={16} />
        )}
      </div>
      <div className={optionControllerStyles.wrapper}>
        <CountInput
          value={option.quantity}
          setValue={(newValue) => onChangeQuantity(newValue)}
        />
        <span className={optionControllerStyles.price}>
          {formatPrice(option.price)}
        </span>
        <CloseButton onClick={onClickDelete} size={18} />
      </div>
    </div>
  );
};

export default OptionController;
