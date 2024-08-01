import BackgroundImage from "@/containers/customer/main/background-image";
import InfoSheet from "@/containers/customer/main/info-sheet";

const CustomerMainPage = () => {
  const photographerProfile = {
    src: "imageSource",
    id: "photographerId",
    links: [],
    message:
      "6,7,8월 유료촬영 문의 받습니다! 🍀누구나 청춘 영화 속 주인공이 될 수 있어요 -!🥰언제 꺼내 봐도 웃음 나는 사진을 찍어 드릴게요 :-)",
  };

  return (
    <div>
      <BackgroundImage />
      <InfoSheet
        message={photographerProfile.message}
        links={photographerProfile.links}
        id={photographerProfile.id}
      />
    </div>
  );
};

export default CustomerMainPage;
