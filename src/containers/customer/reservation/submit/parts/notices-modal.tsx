import { Modal } from "@mantine/core";
import QueryProviders from "@/containers/common/query-providers";
import NoticeList from "@/containers/customer/notice";
import { CustomButton } from "@/components/buttons/common-buttons";
import { modalStyles } from "./parts.css";

const NoticeModal = ({
  opened,
  close,
  onAgree,
}: {
  opened: boolean;
  close: () => void;
  onAgree: () => void;
}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="촬영 공지사항"
      classNames={{ ...modalStyles }}
    >
      <QueryProviders>
        <NoticeList />
        <CustomButton
          size="md"
          styleType="primary"
          title="동의하기"
          onClick={onAgree}
        />
      </QueryProviders>
    </Modal>
  );
};

export default NoticeModal;
