import { Product } from "product-types";
import { UseFormRegister, useFormContext } from "react-hook-form";
import CloseButton from "@/components/buttons/close-button";
import SwitchItem from "@/components/common/switch-item";
import * as style from "../product.css";

interface OptionInputProps {
  formRegister: UseFormRegister<Product>;
  index: number;
  onClickRemove: () => void;
}

const OptionInput = ({
  onClickRemove,
  index,
  formRegister,
}: OptionInputProps) => {
  const { setValue, watch } = useFormContext<Product>();
  const options = watch("options");

  function handleSwitchIsFree() {
    setValue(`options.${index}.isFree`, !options[index]?.isFree);
  }

  return (
    <div className={style.inputBox}>
      <div className={style.inputStyles.headWrapper}>
        <input
          className={style.inputStyles.title}
          placeholder="이름을 입력해 주세요."
          {...formRegister(`options.${index}.title`)}
          style={{ marginRight: "auto" }}
        />
        <SwitchItem
          value={{ selected: "유료", unselected: "무료" }}
          onSwitch={handleSwitchIsFree}
          selected={options[index]?.isFree}
        />
        <CloseButton onClick={onClickRemove} size={18} color="grey" />
      </div>
      <input
        className={style.inputStyles.description}
        placeholder="(선택) 설명을 입력해 주세요."
        {...formRegister(`options.${index}.description`)}
      />

      {options[index]?.isFree && (
        <input
          className={style.inputStyles.content}
          placeholder="가격을 입력해 주세요."
          {...formRegister(`options.${index}.price`)}
        />
      )}
    </div>
  );
};

export default OptionInput;
