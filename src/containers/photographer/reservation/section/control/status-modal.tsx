import { useState } from "react";
import { Status } from "reservation-types";
import { useParams, useRouter } from "next/navigation";
import { PageParams } from "route-parameters";
import { statusTitles } from "@/constants/common/reservation";
import { PARAMETER_DEFAULT_RADIX } from "@/constants/common/common";
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
  const [statusLoading, setStatusLoading] = useState(false);

  async function handleStatusChange() {
    setStatusLoading(true);
    await responseHandler(
      putReservationStatus(
        parseInt(formId, PARAMETER_DEFAULT_RADIX),
        targetStatus,
      ),
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
    setStatusLoading(false);
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
          loading={statusLoading}
        />
      </div>
    </Modal>
  );
};

export default StatusModal;
