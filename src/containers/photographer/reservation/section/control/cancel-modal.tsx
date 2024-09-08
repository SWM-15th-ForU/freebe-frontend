import { useState } from "react";
import { Modal } from "@mantine/core";
import { putReservationStatus } from "@/services/client/photographer/reservations";
import { modalStyles } from "@/containers/customer/products/products.css";
import { CustomButton } from "@/components/buttons/common-buttons";
import TextInput from "@/components/inputs/text-input";
import { sectionStyles } from "../section.css";

const CancelModal = ({
  close,
  opened,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const [cancellationReason, setCancellationReason] = useState("");

  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      classNames={{ ...modalStyles }}
    >
      <div className={sectionStyles.title}>신청서를 정말 취소하시겠어요?</div>
      <div className={sectionStyles.message}>
        신청하신 분과 꼭 협의를 마친 뒤, 신중하게 취소해 주세요.
      </div>
      <TextInput
        placeholder="취소 사유를 입력해 주세요."
        value={cancellationReason}
        onChange={(e) => setCancellationReason(e.currentTarget.value)}
      />
      <CustomButton
        size="sm"
        styleType="primary"
        title="취소하기"
        disabled={cancellationReason === ""}
        onClick={() => putReservationStatus(1, "CANCELLED", cancellationReason)}
      />
    </Modal>
  );
};

export default CancelModal;
