import { ProductFormdata } from "product-types";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import CloseButton from "@/components/buttons/close-button";
import { formStyles, inputStyles } from "../form.css";

interface NoticeInputProps {
  formRegister: UseFormRegister<ProductFormdata>;
  errors: FieldErrors<ProductFormdata>;
  index: number;
  onClickRemove: () => void;
  disabled?: boolean;
  required?: boolean;
}

const NoticeInput = ({
  onClickRemove,
  index,
  formRegister,
  errors,
  disabled,
  required,
}: NoticeInputProps) => {
  return (
    <div className={inputStyles.box}>
      <input
        className={inputStyles.title}
        disabled={disabled || required}
        placeholder="제목을 입력해 주세요."
        {...formRegister(`notices.${index}.title`)}
      />
      {errors.notices?.[index]?.title && (
        <span className={formStyles.error}>
          {errors.notices[index]?.title?.message}
        </span>
      )}
      {!disabled && !required && (
        <CloseButton
          onClick={onClickRemove}
          size={18}
          color="grey"
          container={{ position: "absolute", right: 20, top: 20 }}
        />
      )}
      <div className={inputStyles.content}>
        <textarea
          disabled={disabled}
          placeholder="내용을 입력해 주세요."
          style={{ width: "100%", border: "none", resize: "vertical" }}
          {...formRegister(`notices.${index}.content`)}
        />
      </div>
      {errors.notices?.[index]?.content && (
        <span className={formStyles.error}>
          {errors.notices[index]?.content?.message}
        </span>
      )}
    </div>
  );
};

export default NoticeInput;
