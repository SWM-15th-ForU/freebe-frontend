import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import { reservation } from "product-types";
import { Modal } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import ScheduleCalender from "@/components/calender/schedule-calender";
import popToast from "@/components/common/toast";
import InputStyles from "@/components/inputs/input.css";
import { modalStyles } from "@/containers/customer/products/products.css";
import { responseHandler } from "@/services/common/error";
import { putShootingDate } from "@/services/client/photographer/reservations";
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
  const router = useRouter();
  const { watch } = useFormContext<Details>();
  const [dateValue, setDateValue] = useState<reservation.ScheduleListType>({
    date: null,
    endTime: null,
    startTime: null,
  });
  const [reservationNumber, shootingDate, preferredDates, currentStatus] =
    watch([
      "reservationNumber",
      "shootingDate",
      "preferredDates",
      "currentStatus",
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

  console.log(preferredDates);

  async function handleShootingDateSubmit() {
    if (
      dateValue.date !== null &&
      dateValue.endTime !== null &&
      dateValue.startTime !== null
    ) {
      await responseHandler(
        putShootingDate(
          reservationNumber,
          {
            date: formatDateString(dateValue.date),
            startTime: parseTimeRequest(dateValue.startTime, "00:00"),
            endTime: parseTimeRequest(dateValue.endTime, "24:00"),
          },
          currentStatus,
        ),
        () => {
          close();
          popToast("일정이 변경되었습니다.");
          router.refresh();
        },
        () => {
          popToast("다시 시도해주세요.", "수정에 실패했습니다.", true);
        },
      );
    }
  }

  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      classNames={{ ...modalStyles, content: customModalStyles.dateContent }}
    >
      <div className={sectionStyles.title}>촬영 일정을 변경해주세요.</div>
      <div className={customModalStyles.dateSelect}>
        <ScheduleCalender value={dateValue} setValue={setDateValue} size="md" />
        <div className={customModalStyles.preferredDate}>
          <div className={sectionStyles.message}>후보 일정에서 선택하기</div>

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
