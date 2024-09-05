import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import InputStyles from "./input.css";

interface TextInputProps<T extends FieldValues>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
  placeholder?: string;
  disabled?: boolean;
  multiline?: boolean;
  formField?: Path<T>;
}

const TextInput = <T extends FieldValues>({
  title,
  placeholder = "내용을 입력해주세요.",
  disabled,
  multiline,
  formField,
  ...props
}: TextInputProps<T>) => {
  const { register } = useFormContext();

  return (
    <div className={InputStyles.container}>
      {title && <span className={InputStyles.title}>{title}</span>}
      <div
        className={
          disabled ? InputStyles.disabledInputWrapper : InputStyles.inputWrapper
        }
      >
        {multiline ? (
          <textarea
            className={
              disabled ? InputStyles.disabledInput : InputStyles.multilineInput
            }
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
