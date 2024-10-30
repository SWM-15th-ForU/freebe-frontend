import { Modal } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import { customedModalStyles, modalStyles } from "./list.css";

const DisableModal = ({
  opened,
  close,
  handleDisable,
  productTitle,
}: {
  opened: boolean;
  close: () => void;
  handleDisable: () => Promise<void>;
  productTitle: string;
}) => {
  return (
    <Modal
      onClose={close}
      opened={opened}
      centered
      title={`${productTitle}를 비활성화하시겠어요?`}
      classNames={{ ...customedModalStyles }}
    >
      <span className={modalStyles.content}>
        비활성화한 상품은 고객에게 보이지 않습니다. 활성화하면 언제든지 예약을
        다시 시작할 수 있어요.
      </span>
      <CustomButton
        size="sm"
        styleType="primary"
        title="비활성화하기"
        onClick={handleDisable}
      />
    </Modal>
  );
};

export default DisableModal;
