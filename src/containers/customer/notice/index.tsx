import Image from "next/image";
import { Notice } from "profile-types";
import NoticeItem from "./notice-item";
import { noticeStyles } from "./notice.css";

const NoticeList = ({ data }: { data: Notice[] }) => {
  return (
    <div className={noticeStyles.container}>
      <div className={noticeStyles.header}>
        <Image src="/icons/error.svg" alt="안내" width={24} height={14} />
        <span className={noticeStyles.info}>
          {data.length > 0
            ? "촬영을 신청하기 전, 아래 공지사항을 꼭 확인해주세요."
            : "아직 작가님께서 공지사항을 등록하지 않으셨어요."}
        </span>
      </div>
      <div className={noticeStyles.list}>
        {data.map((notice, index) => {
          return <NoticeItem key={`${notice.title}-${index}`} {...notice} />;
        })}
      </div>
    </div>
  );
};

export default NoticeList;
