import BackgroundImage from "@/containers/customer/main/background-image";
import InfoSheet from "@/containers/customer/main/info-sheet";
import { Link } from "profile-types";

const CustomerMainPage = () => {
  const defaultLinks: Link[] = [
    { name: "상품 선택하기", src: "/products" },
    { name: "일정 확인하기 ", src: "/schedules" },
    { name: "자주 묻는 질문", src: "/faqs" },
  ];

  const photographerProfile = {
    src: "imageSource",
    id: "photographerId",
    links: [
      { name: "a", src: "a" },
      { name: "a", src: "a" },
    ],

    message:
      "6,7,8월 유료촬영 문의 받습니다! 🍀누구나 청춘 영화 속 주인공이 될 수 있어요 -!🥰언제 꺼내 봐도 웃음 나는 사진을 찍어 드릴게요 :-)",
  };

  return (
    <div>
      <BackgroundImage />
      <InfoSheet
        message={photographerProfile.message}
        links={defaultLinks.concat(photographerProfile.links)}
        id={photographerProfile.id}
      />
    </div>
  );
};

export default CustomerMainPage;
