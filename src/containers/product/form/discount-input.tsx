import { Product } from "product-types";
import { UseFormRegister, useWatch } from "react-hook-form";
import * as style from "../product.css";

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
  const discounts = useWatch({ name: "discounts" });

  return (
    <div className={style.inputBox}>
      <input
        className={style.textInput}
        placeholder="할인 종류를 입력해 주세요."
        {...formRegister(`discounts.${index}.title`)}
      />
      {discounts[index]?.hasDescription && (
        <input
          className={style.textInput}
          placeholder="설명을 입력해 주세요."
          {...formRegister(`discounts.${index}.description`)}
        />
      )}
      <select
        id="discountType"
        {...formRegister(`discounts.${index}.discountType`)}
      >
        <option id="discountType" value="AMOUNT">
          금액 할인
        </option>
        <option id="discountType" value="RATE">
          비율 할인
        </option>
      </select>
      <input
        className={style.textInput}
        placeholder={
          discounts[index]?.discountType === "AMOUNT"
            ? "할인 금액을 입력해 주세요."
            : "할인율을 입력해 주세요."
        }
        {...formRegister(`discounts.${index}.discountValue`)}
      />
      <input
        type="checkbox"
        {...formRegister(`discounts.${index}.hasDescription`)}
      />
      <button type="button" onClick={onClickRemove}>
        X
      </button>
    </div>
  );
};

export default DiscountInput;
