import { ReservationDate } from "reservation-types";
import TextInput from "@/components/inputs/text-input";
import { formatDate, formatTimeString } from "@/utils/date";
import { fieldStyles } from "./section.css";

interface FieldProps {
  name: string;
  isEditing?: boolean;
  value: ReservationDate;
}

const ScheduleField = ({ name, isEditing = false, value }: FieldProps) => {
  return (
    <div className={fieldStyles.schedule}>
      <TextInput
        title={name}
        disabled={!isEditing}
        value={`${formatDate(value.date)}    ${formatTimeString(value.startTime)} ~ ${formatTimeString(value.endTime)}`}
      />
    </div>
  );
};

export default ScheduleField;
