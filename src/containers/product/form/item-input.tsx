import { Product } from "product-types";
import { UseFormRegister, useWatch } from "react-hook-form";
import CloseButton from "@/components/buttons/close-button";
import * as style from "../product.css";

interface ItemInputProps {
  formRegister: UseFormRegister<Product>;
  index: number;
  onClickRemove: () => void;
}

const ItemInput = ({ onClickRemove, index, formRegister }: ItemInputProps) => {
  return (
    <div className={style.inputBox}>
      <input
        className={style.inputStyles.title}
        placeholder="이름을 입력해 주세요."
        {...formRegister(`items.${index}.title`)}
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
        {...formRegister(`items.${index}.description`)}
      />
      <input
        className={style.inputStyles.content}
        placeholder="내용을 입력해 주세요."
        {...formRegister(`items.${index}.content`)}
      />
    </div>
  );
};

export default ItemInput;
