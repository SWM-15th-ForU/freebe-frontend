import { useFormContext } from "react-hook-form";
import { PhotographerForm } from "profile-types";
import { defaultLinks } from "@/constants/photographer/mypage";
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
