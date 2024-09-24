import { CSSProperties, DetailedHTMLProps, InputHTMLAttributes } from "react";
import InputStyles from "./input.css";

interface CommonInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
  inputSize?: "sm" | "md";
  placeholder?: string;
  disabled?: boolean;
  multiline?: boolean;
  container?: CSSProperties;
}

const CommonInput = ({
  title,
  placeholder = "내용을 입력해주세요.",
  disabled,
  multiline,
  container,
  inputSize = "sm",
  ...props
}: CommonInputProps) => {
  return (
    <div className={InputStyles.container} style={container}>
      {title && <span className={InputStyles.title}>{title}</span>}
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
            placeholder={placeholder}
          />
        ) : (
          <input
            className={disabled ? InputStyles.disabledInput : InputStyles.input}
            placeholder={placeholder}
            disabled={disabled}
            {...props}
          />
        )}
      </div>
    </div>
  );
};

export default CommonInput;