import { Product } from "product-types";
import { UseFormRegister } from "react-hook-form";
import * as style from "./product.css";

interface ItemInputProps {
  formRegister: UseFormRegister<Product>;
  index: number;
  onClickRemove: () => void;
}

const ItemInput = ({ onClickRemove, index, formRegister }: ItemInputProps) => {
  return (
    <div className={style.inputBox}>
      <input
        className={style.textInput}
        placeholder="이름을 입력해 주세요."
        {...formRegister(`items.${index}.title`)}
      />
      <input
        className={style.textInput}
        placeholder="설명을 입력해 주세요."
        {...formRegister(`items.${index}.description`)}
      />
      <input
        className={style.textInput}
        placeholder="내용을 입력해 주세요."
        {...formRegister(`items.${index}.content`)}
      />
      <button type="button" onClick={onClickRemove}>
        X
      </button>
    </div>
  );
};

export default ItemInput;
