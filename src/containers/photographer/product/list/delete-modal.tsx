import { Modal } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import { customedModalStyles, modalStyles } from "./list.css";

const DeleteModal = ({
  opened,
  close,
  handleDelete,
  productTitle,
}: {
  opened: boolean;
  close: () => void;
  handleDelete: () => Promise<void>;
  productTitle: string;
}) => {
  return (
    <Modal
      onClose={close}
      opened={opened}
      centered
      title={`${productTitle}를 정말 삭제하시겠어요?`}
      classNames={{ ...customedModalStyles }}
    >
      <span className={modalStyles.content}>
        삭제한 상품은 복구할 수 없어요. 예약을 중지할 용도라면, 예약 상태를
        비활성화해 보세요.
      </span>
      <CustomButton
        size="sm"
        styleType="primary"
        title="삭제하기"
        onClick={handleDelete}
      />
    </Modal>
  );
};

export default DeleteModal;
