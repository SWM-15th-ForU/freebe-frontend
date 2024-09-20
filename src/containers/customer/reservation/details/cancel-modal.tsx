import { useState } from "react";
import { useParams } from "next/navigation";
import { Modal } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import CommonInput from "@/components/inputs/common-input";
import popToast from "@/components/common/toast";
import { modalStyles } from "@/containers/customer/products/products.css";
import { cancelReservation } from "@/services/client/customer/reservation";
import { cancelStyles } from "./detail.css";

const CancelModal = ({
  close,
  opened,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const { reservationId } = useParams<{ reservationId: string }>();
  const [cancellationReason, setCancellationReason] = useState("");

  async function handleCancel() {
    try {
      await cancelReservation(parseInt(reservationId, 10), cancellationReason);
      popToast("취소가 완료되었습니다.");
    } catch (error) {
      popToast("다시 시도해주세요.", "취소가 실패했습니다.");
    }
  }

  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      classNames={{ ...modalStyles }}
    >
      <div className={cancelStyles.title}>신청서를 정말 취소하시겠어요?</div>
      <div className={cancelStyles.message}>
        취소하실 경우 사유를 꼭 작성해 주세요.
      </div>
      <CommonInput
        placeholder="취소 사유를 입력해 주세요."
        value={cancellationReason}
        onChange={(e) => setCancellationReason(e.currentTarget.value)}
      />
      <CustomButton
        size="sm"
        styleType="primary"
        title="취소하기"
        disabled={cancellationReason === ""}
        onClick={handleCancel}
      />
    </Modal>
  );
};

export default CancelModal;
