import { useEffect, useState } from "react";
import {
  BaseScheduleType,
  DailyScheduleValue,
  ScheduleStatusType,
  TimeUnitType,
} from "calender-types";
import { DateTime } from "luxon";
import { Divider, Modal, SegmentedControl } from "@mantine/core";
import TimeSelector from "@/components/inputs/time-selector";
import popToast from "@/components/common/toast";
import InfoCaption from "@/components/common/info-caption";
import { CustomButton } from "@/components/buttons/common-buttons";
import { statusNames } from "@/constants/schedule";
import { commonModalStyles } from "@/styles/mantine.css";
import { formatTimeString } from "@/utils/date";
import { responseHandler } from "@/services/common/error";
import {
  deleteDailySchedule,
  postDailySchedule,
  putDailySchedule,
} from "@/services/client/photographer/mypage/schedule";
import { modalStyles } from "./daily.css";

const EditModal = ({
  opened,
  close,
  initValue,
  unit,
  baseSchedule,
  date,
}: {
  opened: boolean;
  close: () => void;
  date: Date;
  initValue?: DailyScheduleValue;
  unit: TimeUnitType;
  baseSchedule: BaseScheduleType;
}) => {
  const defaultSchedule: DailyScheduleValue = {
    date: DateTime.fromJSDate(date),
    scheduleId: 0,
    startTime: DateTime.fromObject({ hour: 12 }),
    endTime: DateTime.fromObject({ hour: 13 }),
    scheduleStatus: "OPEN",
  };
  const STATUS_LIST: ScheduleStatusType[] = ["OPEN", "CLOSED", "CONFIRMED"];

  const [scheduleValue, setScheduleValue] = useState<DailyScheduleValue>(
    initValue || defaultSchedule,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setScheduleValue(initValue || defaultSchedule);
  }, [date, initValue]);

  async function handleSubmit() {
    setIsSubmitting(true);
    await responseHandler(
      initValue
        ? putDailySchedule(scheduleValue)
        : postDailySchedule(scheduleValue),
      () => {
        popToast("저장이 완료되었습니다.");
        close();
      },
      (message) =>
        popToast("다시 시도해주세요.", message || "저장에 실패했습니다.", true),
    );
    setIsSubmitting(false);
  }

  async function handleDelete() {
    setIsDeleting(true);
    await responseHandler(
      deleteDailySchedule(scheduleValue.scheduleId),
      () => {
        popToast("삭제가 완료되었습니다.");
        close();
      },
      (message) =>
        popToast("다시 시도해주세요.", message || "삭제에 실패했습니다.", true),
    );
    setIsDeleting(false);
  }

  function updateStatus(selectedStatus: string) {
    setScheduleValue((prev) => {
      return { ...prev, scheduleStatus: selectedStatus as ScheduleStatusType };
    });
  }

  function updateTime(newTime: string, value: "startTime" | "endTime") {
    setScheduleValue((prev) => {
      const newValue =
        value === "startTime"
          ? { ...prev, startTime: DateTime.fromFormat(newTime, "HH:mm:ss") }
          : { ...prev, endTime: DateTime.fromFormat(newTime, "HH:mm:ss") };
      return newValue;
    });
  }

  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      title={initValue ? "날짜별 스케줄 수정" : "날짜별 스케줄 추가"}
      classNames={{ ...commonModalStyles, ...modalStyles }}
    >
      <div>
        <span className={modalStyles.date}>
          {`${scheduleValue.date.year}.${scheduleValue.date.month}.${scheduleValue.date.day} (${scheduleValue.date.weekdayShort})`}
        </span>
        <span className={modalStyles.baseSchedule}>
          {baseSchedule.isOff
            ? "휴무일입니다."
            : `시작 시간 ${formatTimeString(baseSchedule.startTime)} ~ 종료 시간 ${formatTimeString(baseSchedule.endTime)}`}
        </span>
      </div>
      <Divider style={{ width: "100%" }} />
      <div>
        <SegmentedControl
          data={STATUS_LIST.map((status) => {
            return { value: status, label: statusNames[status] };
          })}
          value={scheduleValue.scheduleStatus}
          onChange={updateStatus}
          color="var(--mantine-primary-color-filled)"
        />
        <InfoCaption
          information={
            scheduleValue.scheduleStatus === "OPEN"
              ? "스케줄을 저장하면 해당 시간대에 고객이 예약을 신청할 수 있습니다."
              : "스케줄을 저장하면 해당 시간대에 고객이 예약을 신청할 수 없습니다."
          }
          container={{ marginTop: 8 }}
        />
      </div>
      <div className={modalStyles.timeWrapper}>
        <span>시작 시간</span>
        <TimeSelector
          time={scheduleValue.startTime.toFormat("HH:mm:ss")}
          setTime={(newTime) => updateTime(newTime, "startTime")}
          maxTime={scheduleValue.endTime.toFormat("HH:mm:ss")}
          unit={unit}
        />
        <span>~</span>
        <span>종료 시간</span>
        <TimeSelector
          time={scheduleValue.endTime.toFormat("HH:mm:ss")}
          setTime={(newTime) => updateTime(newTime, "endTime")}
          minTime={scheduleValue.startTime.toFormat("HH:mm:ss")}
          unit={unit}
        />
      </div>
      <div className={modalStyles.buttonWrapper}>
        {initValue && (
          <CustomButton
            size="md"
            styleType="secondary"
            title="삭제하기"
            onClick={handleDelete}
            loading={isDeleting}
            style={{ flex: 1 }}
          />
        )}
        <CustomButton
          size="md"
          styleType="primary"
          title="저장하기"
          onClick={handleSubmit}
          loading={isSubmitting}
          style={{ flex: 1 }}
        />
      </div>
    </Modal>
  );
};

export default EditModal;
