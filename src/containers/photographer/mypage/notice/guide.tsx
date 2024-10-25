import Image from "next/image";
import { guideStyles } from "./notice.css";

const NoticeGuide = () => {
  return (
    <div>
      <div className={guideStyles.textWrapper}>
        <p className={guideStyles.text}>
          예약을 원하는 고객에게 전달할 공지사항을 작성해주세요. 환불 규정,
          촬영된 사진의 이용 범위, 촬영 일정의 변경 등 촬영 이전에 고객에게
          공유해야 할 내용을 미리 등록해주시면 상품 등록 시 매번 새로 등록하지
          않아도 자동으로 기본 공지사항이 추가돼요.
        </p>
      </div>
    </div>
  );
};

export default NoticeGuide;
