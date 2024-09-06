import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import SectionLayout from "./section-layout";
import { sectionStyles } from "./section.css";
import ScheduleField from "./schedule-field";

const ScheduleDetails = () => {
  const { watch } = useFormContext<Details>();
  const details = watch("preferredDates");

  return (
    <SectionLayout title="희망 일정">
      <div className={sectionStyles.scheduleWrapper}>
        {details.map((detail, index) => (
          <ScheduleField
            key={`schedule ${index + 1}`}
            name={`${index + 1}차 희망`}
            value={detail}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ScheduleDetails;
