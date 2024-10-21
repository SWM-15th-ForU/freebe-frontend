import { TimeInput, TimeInputProps } from "@mantine/dates";
import { parseDate } from "@/utils/date";
import { TimeInputStyles } from "./input.css";

interface CustomedTimeInputProps extends TimeInputProps {
  title: string;
  value: string | number | readonly string[] | undefined;
  date?: Date;
  onChangeTime: (time: Date) => void;
}

// TODO: 오전/오후까지 입력했을 때만 onChange 동작, 입력한 시간을 삭제할 수 없음
const CustomedTimeInput = ({
  title,
  value,
  date,
  onChangeTime,
  ...props
}: CustomedTimeInputProps) => {
  function parseTimeString(time: string) {
    return new Date(`1970-01-01T${time}`);
  }

  function handleTimeChange(time: string) {
    const parsedTime = parseTimeString(time);
    onChangeTime(parsedTime);
  }

  return (
    <div className={TimeInputStyles.container}>
      <span className={TimeInputStyles.title}>{title}</span>
      {date && <span className={TimeInputStyles.date}>{parseDate(date)}</span>}
      <TimeInput
        size="sm"
        value={value}
        onChange={(e) => handleTimeChange(e.currentTarget.value)}
        {...props}
      />
    </div>
  );
};

export default CustomedTimeInput;
