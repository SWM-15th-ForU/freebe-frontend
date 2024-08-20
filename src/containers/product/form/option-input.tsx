import { Product } from "product-types";
import { UseFormRegister, useWatch } from "react-hook-form";
import CloseButton from "@/components/buttons/close-button";
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
        className={style.inputStyles.title}
        placeholder="이름을 입력해 주세요."
        {...formRegister(`options.${index}.title`)}
      />
      <CloseButton
        onClick={onClickRemove}
        size={18}
        color="grey"
        container={{ position: "absolute", right: 20, top: 20 }}
      />

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

      <input type="checkbox" {...formRegister(`options.${index}.isFree`)} />
    </div>
  );
};

export default OptionInput;
