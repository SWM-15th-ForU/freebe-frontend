import { Product } from "product-types";
import { UseFormRegister, useFormContext } from "react-hook-form";
import CloseButton from "@/components/buttons/close-button";
import SwitchItem from "@/components/common/switch-item";
import { inputStyles } from "../product.css";

interface DiscountInputProps {
  formRegister: UseFormRegister<Product>;
  index: number;
  onClickRemove: () => void;
}

const DiscountInput = ({
  onClickRemove,
  index,
  formRegister,
}: DiscountInputProps) => {
  const { setValue, watch } = useFormContext<Product>();
  const discounts = watch("discounts");

  function handleSwitchType() {
    setValue(
      `discounts.${index}.discountType`,
      discounts[index].discountType === "AMOUNT" ? "RATE" : "AMOUNT",
    );
  }

  return (
    <div className={inputStyles.box}>
      <div className={inputStyles.headWrapper}>
        <input
          className={inputStyles.title}
          placeholder="할인 종류를 입력해 주세요."
          {...formRegister(`discounts.${index}.title`)}
          style={{ marginRight: "auto" }}
        />
        <SwitchItem
          value={{ selected: "금액 할인", unselected: "비율 할인" }}
          onSwitch={handleSwitchType}
          selected={discounts[index].discountType === "AMOUNT"}
        />
        <CloseButton onClick={onClickRemove} size={18} color="grey" />
      </div>
      <input
        className={inputStyles.description}
        placeholder="(선택) 설명을 입력해 주세요."
        {...formRegister(`discounts.${index}.description`)}
      />

      <input
        className={inputStyles.content}
        placeholder={
          discounts[index]?.discountType === "AMOUNT"
            ? "할인 금액을 입력해 주세요."
            : "할인율을 입력해 주세요."
        }
        {...formRegister(`discounts.${index}.discountValue`)}
      />
    </div>
  );
};

export default DiscountInput;
