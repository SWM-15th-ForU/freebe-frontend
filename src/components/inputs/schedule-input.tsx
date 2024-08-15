import { reservation } from "product-types";
import { parseDate, parseTime } from "@/utils/date";
import CloseButton from "../buttons/close-button";
import InputStyles from "./input.css";

interface ScheduleInputProps {
  title?: string;
  placeholder?: string;
  disabled?: boolean;
  value: reservation.ScheduleListType;
  onClickValue: () => void;
  onClickDelete: () => void;
}

const ScheduleInput = ({
  title,
  placeholder = "날짜를 선택해주세요.",
  disabled,
  value,
  onClickValue,
  onClickDelete,
}: ScheduleInputProps) => {
  return (
    <div
      className={
        disabled ? InputStyles.disabledInputWrapper : InputStyles.inputWrapper
      }
    >
      <div
        className={InputStyles.contentWrapper}
        role="presentation"
        onClick={onClickValue}
      >
        <span>{value.date && parseDate(value.date)}</span>
        <span>{value.startTime && parseTime(value.startTime)}</span>
        {(value.startTime || value.endTime) && <span>~</span>}
        <span>{value.endTime && parseTime(value.endTime)}</span>
      </div>
      <CloseButton onClick={onClickDelete} size={18} />
    </div>
  );
};

export default ScheduleInput;
