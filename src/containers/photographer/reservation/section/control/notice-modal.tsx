import Image from "next/image";
import { CustomerDetails } from "reservation-types";
import { Modal } from "@mantine/core";
import { modalStyles } from "@/containers/customer/products/products.css";
import { noticeStyles } from "./control.css";

const NoticeItem = ({ title, content }: Notice) => {
  return (
    <div className={noticeStyles.wrapper}>
      <span className={noticeStyles.title}>{title}</span>
      <div className={noticeStyles.content}>{content}</div>
    </div>
  );
};

const NoticeModal = ({
  notices,
  opened,
  close,
}: Pick<CustomerDetails, "notices"> & {
  opened: boolean;
  close: () => void;
}) => {
  return (
    <Modal
      title="촬영 공지사항"
      size="lg"
      opened={opened}
      onClose={close}
      classNames={{ ...modalStyles }}
    >
      <div className={noticeStyles.container}>
        <div className={noticeStyles.header}>
          <Image src="/icons/error.svg" alt="안내" width={14} height={24} />
          <span className={noticeStyles.info}>
            신청서가 접수된 시점의 공지사항입니다. 변경이 필요한 사항이 있다면
            고객에게 안내해주세요.
          </span>
        </div>
        <div className={noticeStyles.list}>
          {notices.map((notice, index) => {
            return <NoticeItem key={`${notice.title}-${index}`} {...notice} />;
          })}
        </div>
      </div>
    </Modal>
  );
};

export default NoticeModal;
