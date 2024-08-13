import { TimeInput, TimeInputProps } from "@mantine/dates";
import { parseDate } from "@/utils/date";
import { TimeInputStyles } from "./input.css";

interface CustomedTimeInputProps extends TimeInputProps {
  title: string;
  date?: Date;
  onChangeTime: (time: Date) => void;
}

const CustomedTimeInput = ({
  title,
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
        onChange={(e) => handleTimeChange(e.currentTarget.value)}
        {...props}
      />
    </div>
  );
};

export default CustomedTimeInput;
