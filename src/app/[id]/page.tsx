import BackgroundImage from "@/containers/customer/main/background-image";
import InfoSheet from "@/containers/customer/main/info-sheet";
import { getPhotographerProfile } from "@/services/server/customer/photographer";
import { LinkType } from "profile-types";
import { mainStyle } from "./customer.css";

const CustomerMainPage = async ({ params }: { params: { id: number } }) => {
  const defaultLinks: LinkType[] = [
    { name: "상품 선택하기", src: "/products" },
    { name: "일정 확인하기 ", src: "/schedules" },
    { name: "자주 묻는 질문", src: "/faqs" },
  ];

  const photographerProfile = await getPhotographerProfile(params.id);

  return (
    <div className={mainStyle}>
      <BackgroundImage mainImage={photographerProfile.banner} />
      <InfoSheet
        defaultLinks={defaultLinks.map((link) => {
          return { ...link, src: params.id + link.src };
        })}
        {...photographerProfile}
      />
    </div>
  );
};

export default CustomerMainPage;
