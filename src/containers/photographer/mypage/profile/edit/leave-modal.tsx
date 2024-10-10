import { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@mantine/core";
import { modalStyles } from "@/containers/customer/products/products.css";
import { CustomButton } from "@/components/buttons/common-buttons";
import popToast from "@/components/common/toast";
import { responseHandler } from "@/services/common/error";
import CommonInput from "@/components/inputs/common-input";
import { leaveService } from "@/services/client/photographer/mypage/profile";
import { leaveStyles } from "./edit.css";

const LeaveModal = ({
  close,
  opened,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const router = useRouter();
  const [reason, setReason] = useState("");

  async function handleLeave() {
    await responseHandler(
      leaveService(reason),
      () => {
        close();
        popToast(
          "그동안 프리비를 이용해주셔서 감사합니다.",
          "탈퇴가 완료되었습니다.",
        );
        router.push("/login/photographer");
      },
      () => {
        close();
        popToast("다시 시도해주세요.", "탈퇴에 실패했습니다.", true);
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
      <div className={leaveStyles.title}>정말로 프리비를 탈퇴하시겠어요?</div>
      <div className={leaveStyles.message}>
        서비스를 탈퇴하실 경우, 기존에 등록했던 상품과 진행했던 신청 일정을 다시
        확인할 수 없어요.
      </div>
      <CommonInput
        placeholder="탈퇴 사유를 작성해주세요."
        value={reason}
        onChange={(e) => setReason(e.currentTarget.value)}
        multiline
      />
      <CustomButton
        size="sm"
        styleType="danger"
        title="탈퇴하기"
        disabled={reason === ""}
        onClick={handleLeave}
      />
    </Modal>
  );
};

export default LeaveModal;
