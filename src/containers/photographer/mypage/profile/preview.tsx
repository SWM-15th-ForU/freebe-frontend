import { useFormContext } from "react-hook-form";
import { LinkType, PhotographerForm } from "profile-types";
import BackgroundImage from "@/containers/customer/main/background-image";
import InfoSheet from "@/containers/customer/main/info-sheet";
import { profileStyles } from "./profile.css";

const Preview = () => {
  const { watch } = useFormContext<PhotographerForm>();
  const [banner, message, linkInfos, profileImg, profileName] = watch([
    "bannerImg",
    "message",
    "linkInfos",
    "profileImg",
    "profileName",
  ]);

  const defaultLinks: LinkType[] = [
    { name: "상품 선택하기", src: "/products" },
    { name: "일정 확인하기 ", src: "/schedules" },
    { name: "자주 묻는 질문", src: "/faqs" },
  ];

  return (
    <div className={profileStyles.preview}>
      <BackgroundImage mainImage={banner?.url} />
      <InfoSheet
        preview
        profileName={profileName}
        defaultLinks={defaultLinks}
        linkInfos={linkInfos}
        message={message}
        profileImg={profileImg?.url}
      />
    </div>
  );
};

export default Preview;
