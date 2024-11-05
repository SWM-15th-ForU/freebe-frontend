import { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@mantine/core";
import { MAX_LENGTHS } from "@/constants/common/schema";
import { modalStyles } from "@/containers/customer/products/products.css";
import { CustomButton } from "@/components/buttons/common-buttons";
import popToast from "@/components/common/toast";
import { responseHandler } from "@/services/common/error";
import CommonInput from "@/components/inputs/common-input";
import CheckBox from "@/components/inputs/checkbox";
import { leaveService } from "@/services/client/photographer/mypage/profile";
import { leaveStyles } from "./edit.css";

const EXAMPLE_REASONS = [
  { value: "고객이 불편해해요" },
  { value: "이제 촬영을 진행하지 않아요" },
  { value: "서비스 퀄리티가 낮아요" },
  { value: "신청이 잘 들어오지 않아요" },
  { value: "이용이 불편해요" },
  { value: "기타" },
];

const LeaveModal = ({
  close,
  opened,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const router = useRouter();
  const [selectedReason, setSelectedReason] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLeave() {
    setLoading(true);
    await responseHandler(
      leaveService(selectedReason === "기타" ? reason : selectedReason),
      () => {
        close();
        popToast(
          "그동안 프리비를 이용해주셔서 감사합니다.",
          "탈퇴가 완료되었습니다.",
        );
        router.push("/login/photographer");
      },
      () => {
        popToast("다시 시도해주세요.", "탈퇴에 실패했습니다.", true);
      },
    );
    setLoading(false);
  }

  function handleSelectReason(newReason: string) {
    if (selectedReason === newReason) {
      setSelectedReason("");
    } else {
      setSelectedReason(newReason);
    }
  }

  return (
    <Modal
      centered
      size="lg"
      opened={opened}
      onClose={close}
      title="정말로 프리비를 탈퇴하시겠어요?"
      classNames={{ ...modalStyles }}
    >
      <div className={leaveStyles.wrapper}>
        <div className={leaveStyles.message}>
          탈퇴하시기 전, 다음 내용을 꼭 확인해주세요.
        </div>
        <ul className={leaveStyles.list}>
          <li>
            예약 진행 중인 촬영이 있다면 탈퇴가 불가능합니다. 모든 촬영을 완료한
            뒤 탈퇴해주세요.
          </li>
          <li>
            회원 탈퇴 이후 기존 상품과 지난 예약건에 대한 복구가 불가능합니다.
          </li>
          <li>회원 탈퇴 이후 서비스에서 발급된 링크를 사용하실 수 없습니다.</li>
          <li>
            탈퇴 이후 작가님의 정보는 프리비 개인정보처리방침에 따라 관리됩니다.
          </li>
          <li>
            탈퇴 이후에도 작가님과 촬영을 진행한 고객은 촬영 내역을 확인할 수
            있습니다. (단, 작가님께서 등록하신 연락처는 제공되지 않습니다.)
          </li>
        </ul>
        <div className={leaveStyles.message}>
          탈퇴하시는 이유를 알려주시면 더 나은 서비스를 만들기 위해 노력할게요.
        </div>
        <div className={leaveStyles.reasonWrapper}>
          {EXAMPLE_REASONS.map((item) => {
            return (
              <CheckBox
                key={item.value}
                title={item.value}
                onPress={() => {
                  handleSelectReason(item.value);
                }}
                checked={selectedReason === item.value}
              />
            );
          })}
        </div>
        {selectedReason === "기타" && (
          <CommonInput
            placeholder="탈퇴 사유를 작성해주세요. (최대 500자)"
            value={reason}
            onChange={(e) => setReason(e.currentTarget.value)}
            multiline
            maxLength={MAX_LENGTHS.LONG_TEXT}
          />
        )}
      </div>

      <CustomButton
        size="md"
        styleType="danger"
        title="탈퇴하기"
        disabled={
          (reason === "" && selectedReason === "기타") || selectedReason === ""
        }
        onClick={handleLeave}
        loading={loading}
      />
    </Modal>
  );
};

export default LeaveModal;
