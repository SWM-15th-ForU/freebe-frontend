import { Product, ProductFormdata } from "product-types";
import { FieldErrors, UseFormRegister, useFormContext } from "react-hook-form";
import CloseButton from "@/components/buttons/close-button";
import SwitchItem from "@/components/common/switch-item";
import { formStyles, inputStyles, textInput } from "../form.css";

interface OptionInputProps {
  formRegister: UseFormRegister<ProductFormdata>;
  errors: FieldErrors<ProductFormdata>;
  index: number;
  onClickRemove: () => void;
  disabled?: boolean;
}

const OptionInput = ({
  onClickRemove,
  index,
  formRegister,
  errors,
  disabled,
}: OptionInputProps) => {
  const { setValue, watch } = useFormContext<Product>();
  const options = watch("options");

  function handleSwitchIsFree() {
    setValue(`options.${index}.isFree`, !options[index]?.isFree);
  }

  return (
    <div className={inputStyles.box}>
      <div className={inputStyles.headWrapper}>
        <input
          className={inputStyles.title}
          disabled={disabled}
          placeholder="이름을 입력해 주세요."
          {...formRegister(`options.${index}.title`)}
          style={{ marginRight: "auto" }}
        />
        <SwitchItem
          value={{ selected: "무료", unselected: "유료" }}
          onSwitch={handleSwitchIsFree}
          selected={options[index]?.isFree}
          asChip={disabled}
        />
        {!disabled && (
          <CloseButton onClick={onClickRemove} size={18} color="grey" />
        )}
      </div>
      {errors.options?.[index]?.title && (
        <span className={formStyles.error}>
          {errors.options[index]?.title?.message}
        </span>
      )}
      <input
        className={inputStyles.description}
        disabled={disabled}
        placeholder="(선택) 설명을 입력해 주세요."
        {...formRegister(`options.${index}.description`)}
      />
      {errors.options?.[index]?.description && (
        <span className={formStyles.error}>
          {errors.options[index]?.description?.message}
        </span>
      )}

      {
        // TODO: 숫자만 입력 받으면서 입력 값 형식 관리할 수 있도록 확장
        !options[index]?.isFree && (
          <>
            <div className={inputStyles.content}>
              <input
                className={textInput}
                disabled={disabled}
                placeholder="가격을 입력해 주세요."
                type="number"
                {...formRegister(`options.${index}.price`)}
              />
              <span>원</span>
            </div>

            {errors.options?.[index]?.price && (
              <span className={formStyles.error}>
                {errors.options[index]?.price?.message}
              </span>
            )}
          </>
        )
      }
    </div>
  );
};

export default OptionInput;
