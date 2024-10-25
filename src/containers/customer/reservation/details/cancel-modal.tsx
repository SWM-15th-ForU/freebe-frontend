import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PageParams } from "route-parameters";
import { Modal } from "@mantine/core";
import { PARAMETER_DEFAULT_RADIX } from "@/constants/common/common";
import { MAX_LENGTHS } from "@/constants/common/schema";
import { CustomButton } from "@/components/buttons/common-buttons";
import CommonInput from "@/components/inputs/common-input";
import popToast from "@/components/common/toast";
import { modalStyles } from "@/containers/customer/products/products.css";
import { cancelReservation } from "@/services/client/customer/reservation";
import { responseHandler } from "@/services/common/error";
import { cancelStyles } from "./detail.css";

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
      cancelReservation(
        parseInt(formId, PARAMETER_DEFAULT_RADIX),
        cancellationReason,
      ),
      () => {
        close();
        popToast("신청이 취소되었습니다.");
        router.refresh();
      },
      () => {
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
      <div className={cancelStyles.title}>신청서를 정말 취소하시겠어요?</div>
      <div className={cancelStyles.message}>
        취소하실 경우 사유를 꼭 작성해 주세요.
      </div>
      <CommonInput
        placeholder="취소 사유를 입력해 주세요. (최대 100자)"
        value={cancellationReason}
        multiline={false}
        maxLength={MAX_LENGTHS.TEXT}
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
