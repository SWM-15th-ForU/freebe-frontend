import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import { formatDate, formatTimeString } from "@/utils/date";
import { sectionStyles } from "../section.css";
import { dateStyles } from "./control.css";

const ShootingDate = () => {
  const { watch } = useFormContext<Details>();
  const shootingDate = watch("shootingDate");

  return (
    <div className={sectionStyles.priceWrapper}>
      <span className={sectionStyles.title}>촬영 일정</span>
      {shootingDate ? (
        <div className={dateStyles.wrapper}>
          <span className={dateStyles.schedule}>
            {formatDate(shootingDate.date)}
          </span>
          <span className={dateStyles.schedule}>
            {formatTimeString(shootingDate.startTime)}
            {" ~ "}
            {formatTimeString(shootingDate.endTime)}
          </span>
        </div>
      ) : (
        <div className={dateStyles.wrapper}>
          <span className={dateStyles.info}>
            아직 일정이 확정되지 않았어요.
          </span>
        </div>
      )}
    </div>
  );
};

export default ShootingDate;
