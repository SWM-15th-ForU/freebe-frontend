import { Status } from "reservation-types";
import { useParams, useRouter } from "next/navigation";
import { PageParams } from "route-parameters";
import { statusTitles } from "@/constants/common/reservation";
import { Modal } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import popToast from "@/components/common/toast";
import { modalStyles } from "@/containers/customer/products/products.css";
import { putReservationStatus } from "@/services/client/photographer/reservations";
import { responseHandler } from "@/services/common/error";
import { sectionStyles } from "../section.css";
import { customModalStyles } from "./control.css";

const StatusModal = ({
  close,
  opened,
  targetStatus,
}: {
  opened: boolean;
  close: () => void;
  targetStatus: Status;
}) => {
  const router = useRouter();
  const { formId } = useParams<Pick<PageParams, "formId">>();

  async function handleStatusChange() {
    await responseHandler(
      putReservationStatus(parseInt(formId, 10), targetStatus),
      () => {
        close();
        popToast("신청 상태가 변경되었습니다.");
        router.refresh();
      },
      () => {
        close();
        popToast("다시 시도해주세요.", "수정에 실패했습니다.", true);
        router.refresh();
      },
    );
  }

  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      withCloseButton={false}
      classNames={{ ...modalStyles }}
    >
      <div className={customModalStyles.content}>
        <div className={sectionStyles.message}>
          신청서를 &apos;{statusTitles[targetStatus]}&apos; 상태로
          변경하시겠어요?
        </div>
        <CustomButton
          size="sm"
          styleType="primary"
          title="변경하기"
          onClick={handleStatusChange}
        />
      </div>
    </Modal>
  );
};

export default StatusModal;
