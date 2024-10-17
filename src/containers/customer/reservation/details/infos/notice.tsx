import Image from "next/image";
import { CustomerDetails } from "reservation-types";
import { noticeStyles } from "./infos.css";

const NoticeItem = ({ title, content }: Notice) => {
  return (
    <div className={noticeStyles.wrapper}>
      <span className={noticeStyles.title}>{title}</span>
      <div className={noticeStyles.content}>{content}</div>
    </div>
  );
};

const NoticeList = ({ notices }: Pick<CustomerDetails, "notices">) => {
  return (
    <div className={noticeStyles.container}>
      <div className={noticeStyles.header}>
        <Image src="/icons/error.svg" alt="안내" width={14} height={24} />
        <span className={noticeStyles.info}>신청 시점의 공지사항입니다.</span>
      </div>
      <div className={noticeStyles.list}>
        {notices.map((notice, index) => {
          return <NoticeItem key={`${notice.title}-${index}`} {...notice} />;
        })}
      </div>
    </div>
  );
};

export default NoticeList;
