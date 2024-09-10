import BackgroundImage from "@/containers/customer/main/background-image";
import InfoSheet from "@/containers/customer/main/info-sheet";
import { LinkType } from "profile-types";
import { mainStyle } from "./customer.css";

const CustomerMainPage = ({ params }: { params: { id: string } }) => {
  // TODO: 사진작가 프로필 조회 api 연결
  const defaultLinks: LinkType[] = [
    { name: "상품 선택하기", src: "/products" },
    { name: "일정 확인하기 ", src: "/schedules" },
    { name: "자주 묻는 질문", src: "/faqs" },
  ];
  const photographerProfile = {
    src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MDVfMTky%2FMDAxNjgwNjYzNzkzODE3.j2lbl0bhUKaVpUdl5AKcpxEakvopeSKngmwCKmblHjkg.WyMGUS53MdWtm1D-xDEAqZ6u7a7-3_1M_yNVP_iJuZIg.JPEG.syher0604%2FIMG_8332.JPG&type=a340",
    id: "photographerId",
    links: [],

    message:
      "6,7,8월 유료촬영 문의 받습니다! 🍀누구나 청춘 영화 속 주인공이 될 수 있어요 -!🥰언제 꺼내 봐도 웃음 나는 사진을 찍어 드릴게요 :-)",
  };

  return (
    <div className={mainStyle}>
      <BackgroundImage mainImage={photographerProfile.src} />
      <InfoSheet
        message={photographerProfile.message}
        links={defaultLinks.concat(photographerProfile.links).map((link) => {
          return { ...link, src: params.id + link.src };
        })}
        id={photographerProfile.id}
      />
    </div>
  );
};

export default CustomerMainPage;
