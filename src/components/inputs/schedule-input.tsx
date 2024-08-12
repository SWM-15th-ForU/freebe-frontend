import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import InputStyles from "./input.css";
import CloseButton from "../buttons/close-button";

interface ScheduleInputProps<T extends FieldValues>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
  placeholder?: string;
  disabled?: boolean;
  formField?: keyof T;
  onClickDelete: () => void;
}

const ScheduleInput = <T extends FieldValues>({
  title,
  placeholder = "날짜를 선택해주세요.",
  disabled,
  formField,
  onClickDelete,
  ...props
}: ScheduleInputProps<T>) => {
  const { register, setValue } = useFormContext();

  return (
    <div className={InputStyles.container}>
      {title && <span className={InputStyles.title}>{title}</span>}
      <div
        className={
          disabled ? InputStyles.disabledInputWrapper : InputStyles.inputWrapper
        }
      >
        <input
          className={disabled ? InputStyles.disabledInput : InputStyles.input}
          type="datetime-local"
          placeholder={placeholder}
          {...(formField && register(formField.toString()))}
          disabled
          {...props}
        />
        <CloseButton onClick={onClickDelete} size={18} />
      </div>
    </div>
  );
};

export default ScheduleInput;
