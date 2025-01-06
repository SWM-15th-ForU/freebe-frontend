import { TimeUnitType } from "calender-types";
import { Modal } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import { commonModalStyles } from "@/styles/mantine.css";
import { responseHandler } from "@/services/common/error";
import { putNewUnit } from "@/services/client/photographer/mypage/schedule";
import popToast from "@/components/common/toast";

const introduction: { [keys in TimeUnitType]: string } = {
  THIRTY_MINUTES:
    "예약 시간을 30분 단위로 설정하시면, 이후에 다시 1시간으로 변경할 경우 기본 스케줄과 날짜별 스케줄이 모두 초기화됩니다.",
  SIXTY_MINUTES:
    "예약 시간을 1시간 단위로 변경할 경우, 기본 스케줄과 날짜별 스케줄이 모두 초기화됩니다.",
};

const ConfirmModal = ({
  opened,
  close,
  requestedUnit,
}: {
  opened: boolean;
  close: () => void;
  requestedUnit: TimeUnitType;
}) => {
  async function handleChangeUnit() {
    await responseHandler(
      putNewUnit(requestedUnit),
      () => {
        close();
        popToast("변경이 완료되었습니다.");
      },
      () => {
        popToast("다시 시도해주세요.", "변경에 실패했습니다.", true);
      },
    );
  }

  return (
    <Modal
      onClose={close}
      opened={opened}
      centered
      title="변경 전 확인해주세요."
      classNames={{ ...commonModalStyles }}
    >
      <span>{introduction[requestedUnit]}</span>
      <CustomButton
        size="sm"
        styleType="primary"
        title="그래도 변경하기"
        onClick={handleChangeUnit}
      />
    </Modal>
  );
};

export default ConfirmModal;
