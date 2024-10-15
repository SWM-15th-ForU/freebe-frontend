import { Notice } from "profile-types";
import { noticeStyles } from "./notice.css";

const NoticeItem = ({ title, content }: Notice) => {
  return (
    <div className={noticeStyles.wrapper}>
      <span className={noticeStyles.title}>{title}</span>
      <div className={noticeStyles.content}>{content}</div>
    </div>
  );
};

export default NoticeItem;
