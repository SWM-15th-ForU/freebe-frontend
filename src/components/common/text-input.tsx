import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import TextInputStyles from "./text-input.css";

interface TextInputProps<T extends FieldValues>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
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
  ...props
}: TextInputProps<T>) => {
  const { register } = useFormContext();

  return (
    <div className={TextInputStyles.container}>
      {title && <span className={TextInputStyles.title}>{title}</span>}
      <div
        className={
          disabled
            ? TextInputStyles.disabledInputWrapper
            : TextInputStyles.inputWrapper
        }
      >
        <input
          className={
            disabled ? TextInputStyles.disabledInput : TextInputStyles.input
          }
          placeholder={placeholder}
          {...(formField && register(formField.toString()))}
          disabled
          {...props}
        />
      </div>
    </div>
  );
};

export default TextInput;
