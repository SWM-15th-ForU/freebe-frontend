import { FieldValues, useFormContext } from "react-hook-form";
import TextInputStyles from "./text-input.css";

interface TextInputProps<T extends FieldValues> {
  title?: string;
  placeholder?: string;
  disabled?: boolean;
  formField?: keyof T;
}

const TextInput = <T extends FieldValues>({
  title,
  placeholder = "내용을 입력해주세요.",
  disabled,
  formField,
}: TextInputProps<T>) => {
  const { register } = useFormContext();

  return (
    <div className={TextInputStyles.container}>
      {title && <span className={TextInputStyles.title}>{title}</span>}
      <div className={TextInputStyles.inputWrapper}>
        {formField ? (
          <input
            className={TextInputStyles.input}
            placeholder={placeholder}
            {...register(formField.toString())}
          />
        ) : (
          <input className={TextInputStyles.input} placeholder={placeholder} />
        )}
      </div>
    </div>
  );
};

export default TextInput;
