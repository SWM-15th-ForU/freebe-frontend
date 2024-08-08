import { Product } from "product-types";
import { UseFormRegister, useWatch } from "react-hook-form";
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
  const options = useWatch({ name: "options" });

  return (
    <div className={style.inputBox}>
      <input
        className={style.textInput}
        placeholder="이름을 입력해 주세요."
        {...formRegister(`options.${index}.title`)}
      />
      {options[index]?.hasDescription && (
        <input
          className={style.textInput}
          placeholder="설명을 입력해 주세요."
          {...formRegister(`options.${index}.description`)}
        />
      )}
      {options[index]?.isFree && (
        <input
          className={style.textInput}
          placeholder="가격을 입력해 주세요."
          {...formRegister(`options.${index}.price`)}
        />
      )}

      <input type="checkbox" {...formRegister(`options.${index}.isFree`)} />
      <input
        type="checkbox"
        {...formRegister(`options.${index}.hasDescription`)}
      />
      <button type="button" onClick={onClickRemove}>
        X
      </button>
    </div>
  );
};

export default OptionInput;
