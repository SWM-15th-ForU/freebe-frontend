import { BaseScheduleForm } from "calender-types";
import { useFormContext } from "react-hook-form";
import { Modal } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import { commonModalStyles } from "@/styles/mantine.css";
import { dayNames, daysArray } from "@/constants/schedule";
import { formatTimeString } from "@/utils/date";
import { confirmModalStyles } from "./base.css";

const ConfirmModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const {
    getValues,
    formState: { isSubmitting },
  } = useFormContext<BaseScheduleForm>();

  const form = getValues();

  return (
    <Modal
      onClose={close}
      opened={opened}
      centered
      size="lg"
      title="변경 전 확인해주세요."
      withinPortal={false}
      classNames={{ ...commonModalStyles, inner: confirmModalStyles.inner }}
    >
      <span className={confirmModalStyles.caption}>
        변경한 스케줄은 예약하려는 고객에게 바로 공유돼요. 단, 이미 신청된
        예약에서 고객이 설정한 희망 시간과 확정된 예약의 촬영 시간은 스케줄
        변경에 영향을 받지 않아요.
      </span>
      <div className={confirmModalStyles.content}>
        {daysArray.map((day) => (
          <div key={day} className={confirmModalStyles.schedule}>
            <span className={confirmModalStyles.key}>{dayNames[day]}</span>
            <div className={confirmModalStyles.value}>
              {form[day].isOff ? (
                <span>휴무일</span>
              ) : (
                <div>
                  <span>{formatTimeString(form[day].startTime)} ~ </span>
                  <span>{formatTimeString(form[day].endTime)}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <CustomButton
        type="submit"
        title="위 스케줄로 변경하기"
        size="sm"
        styleType="primary"
        loading={isSubmitting}
      />
    </Modal>
  );
};

export default ConfirmModal;
