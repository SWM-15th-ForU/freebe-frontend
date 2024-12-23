import { CSSProperties, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import AdditionInfo from "../common/addition-info";
import InputStyles from "./input.css";

interface TextInputProps<T extends FieldValues>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
  inputSize?: "sm" | "md";
  placeholder?: string;
  disabled?: boolean;
  multiline?: boolean;
  description?: string;
  formField?: Path<T>;
  container?: CSSProperties;
}

const TextInput = <T extends FieldValues>({
  title,
  placeholder = "내용을 입력해주세요.",
  disabled,
  multiline,
  description,
  formField,
  container,
  inputSize = "sm",
  ...props
}: TextInputProps<T>) => {
  const { register } = useFormContext();

  return (
    <div className={InputStyles.container} style={container}>
      <div className={InputStyles.header}>
        {title && <span className={InputStyles.title}>{title}</span>}
        {description && <AdditionInfo content={description} size={16} />}
      </div>
      <div
        className={`${
          disabled ? InputStyles.disabledInputWrapper : InputStyles.inputWrapper
        } ${inputSize === "sm" ? InputStyles.smWrapper : InputStyles.mdWrapper}`}
      >
        {multiline ? (
          <textarea
            className={
              disabled ? InputStyles.disabledInput : InputStyles.multilineInput
            }
            disabled={disabled}
            placeholder={placeholder}
            {...(formField && register(formField))}
          />
        ) : (
          <input
            className={disabled ? InputStyles.disabledInput : InputStyles.input}
            placeholder={placeholder}
            {...(formField && register(formField))}
            disabled={disabled}
            {...props}
          />
        )}
      </div>
    </div>
  );
};

export default TextInput;
