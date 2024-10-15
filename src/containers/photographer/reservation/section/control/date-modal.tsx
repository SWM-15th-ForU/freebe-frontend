import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import { reservation } from "product-types";
import { Modal } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import ScheduleCalender from "@/components/calender/schedule-calender";
import InputStyles from "@/components/inputs/input.css";
import { modalStyles } from "@/containers/customer/products/products.css";
import {
  createDateObjects,
  formatDate,
  formatDateString,
  formatTimeString,
  parseTimeRequest,
} from "@/utils/date";
import { sectionStyles } from "../section.css";
import { customModalStyles } from "./control.css";

const DateModal = ({
  close,
  opened,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const { watch, setValue } = useFormContext<Details>();
  const [dateValue, setDateValue] = useState<reservation.ScheduleListType>({
    date: null,
    endTime: null,
    startTime: null,
  });
  const [shootingDate, preferredDates] = watch([
    "shootingDate",
    "preferredDates",
  ]);

  useEffect(() => {
    if (shootingDate) {
      setDateValue(
        createDateObjects(
          shootingDate.date,
          shootingDate.startTime,
          shootingDate.endTime,
        ),
      );
    }
  }, [shootingDate]);

  async function handleShootingDateSubmit() {
    if (
      dateValue.date !== null &&
      dateValue.endTime !== null &&
      dateValue.startTime !== null
    ) {
      setValue("shootingDate", {
        date: formatDateString(dateValue.date),
        startTime: parseTimeRequest(dateValue.startTime, "00:00"),
        endTime: parseTimeRequest(dateValue.endTime, "23:59"),
      });
      close();
    }
  }

  return (
    <Modal
      centered
      title="촬영 일정을 변경해주세요."
      opened={opened}
      onClose={close}
      classNames={{ ...modalStyles, content: customModalStyles.dateContent }}
    >
      <div className={customModalStyles.dateSelect}>
        <ScheduleCalender value={dateValue} setValue={setDateValue} size="md" />
        <div className={customModalStyles.preferredDate}>
          {preferredDates.length > 0 && (
            <div className={sectionStyles.message}>후보 일정에서 선택하기</div>
          )}
          {preferredDates.map((value, index) => (
            <div
              key={`${index} ${value.date}`}
              className={`${InputStyles.inputWrapper} ${InputStyles.mdWrapper}`}
              role="presentation"
              onClick={() =>
                setDateValue(
                  createDateObjects(value.date, value.startTime, value.endTime),
                )
              }
            >
              <span className={InputStyles.input}>
                {formatDate(value.date)} {formatTimeString(value.startTime)} ~{" "}
                {formatTimeString(value.endTime)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <CustomButton
        size="md"
        styleType="primary"
        title="변경하기"
        disabled={
          dateValue.date === null ||
          dateValue.endTime === null ||
          dateValue.startTime === null
        }
        onClick={handleShootingDateSubmit}
      />
    </Modal>
  );
};

export default DateModal;
