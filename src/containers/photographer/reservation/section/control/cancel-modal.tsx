import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PageParams } from "route-parameters";
import { Modal } from "@mantine/core";
import { PARAMETER_DEFAULT_RADIX } from "@/constants/common/common";
import { modalStyles } from "@/containers/customer/products/products.css";
import { CustomButton } from "@/components/buttons/common-buttons";
import TextInput from "@/components/inputs/text-input";
import popToast from "@/components/common/toast";
import { putReservationStatus } from "@/services/client/photographer/reservations";
import { responseHandler } from "@/services/common/error";
import { sectionStyles } from "../section.css";

const CancelModal = ({
  close,
  opened,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const router = useRouter();
  const { formId } = useParams<Pick<PageParams, "formId">>();
  const [cancellationReason, setCancellationReason] = useState("");

  async function handleCancel() {
    await responseHandler(
      putReservationStatus(
        parseInt(formId, PARAMETER_DEFAULT_RADIX),
        "CANCELLED_BY_PHOTOGRAPHER",
        cancellationReason,
      ),
      () => {
        close();
        popToast("신청이 취소되었습니다.");
        router.push("/photographer");
      },
      () => {
        close();
        popToast("다시 시도해주세요.", "취소에 실패했습니다.", true);
        router.refresh();
      },
    );
  }

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
        onClick={handleCancel}
      />
    </Modal>
  );
};

export default CancelModal;
