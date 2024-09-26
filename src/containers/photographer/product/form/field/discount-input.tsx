import { Product, ProductFormdata } from "product-types";
import { FieldErrors, UseFormRegister, useFormContext } from "react-hook-form";
import CloseButton from "@/components/buttons/close-button";
import SwitchItem from "@/components/common/switch-item";
import { formStyles, inputStyles } from "../form.css";

interface DiscountInputProps {
  formRegister: UseFormRegister<ProductFormdata>;
  errors: FieldErrors<ProductFormdata>;
  index: number;
  onClickRemove: () => void;
  disabled?: boolean;
}

const DiscountInput = ({
  onClickRemove,
  index,
  formRegister,
  errors,
  disabled,
}: DiscountInputProps) => {
  const { setValue, watch } = useFormContext<Product>();
  const discounts = watch("discounts");

  function handleSwitchType() {
    setValue(
      `discounts.${index}.discountType`,
      discounts[index].discountType === "AMOUNT" ? "RATE" : "AMOUNT",
    );
    setValue(`discounts.${index}.discountValue`, 0);
  }

  return (
    <div className={inputStyles.box}>
      <div className={inputStyles.headWrapper}>
        <input
          className={inputStyles.title}
          disabled={disabled}
          placeholder="할인 종류를 입력해 주세요."
          {...formRegister(`discounts.${index}.title`)}
          style={{ marginRight: "auto" }}
        />
        <SwitchItem
          value={{ selected: "금액 할인", unselected: "비율 할인" }}
          onSwitch={handleSwitchType}
          selected={discounts[index].discountType === "AMOUNT"}
          asChip={disabled}
        />
        {!disabled && (
          <CloseButton onClick={onClickRemove} size={18} color="grey" />
        )}
      </div>
      {errors.discounts?.[index]?.title && (
        <span className={formStyles.error}>
          {errors.discounts[index]?.title?.message}
        </span>
      )}
      {(!disabled || discounts[index].description !== "") && (
        <input
          className={inputStyles.description}
          disabled={disabled}
          placeholder="(선택) 설명을 입력해 주세요."
          {...formRegister(`discounts.${index}.description`)}
        />
      )}
      {errors.discounts?.[index]?.description && (
        <span className={formStyles.error}>
          {errors.discounts[index]?.description?.message}
        </span>
      )}
      <input
        className={inputStyles.content}
        disabled={disabled}
        type="number"
        placeholder={
          discounts[index]?.discountType === "AMOUNT"
            ? "할인 금액을 입력해 주세요."
            : "할인율을 입력해 주세요."
        }
        {...formRegister(`discounts.${index}.discountValue`)}
      />
      {errors.discounts?.[index]?.discountValue && (
        <span className={formStyles.error}>
          {errors.discounts[index]?.discountValue?.message}
        </span>
      )}
    </div>
  );
};

export default DiscountInput;
