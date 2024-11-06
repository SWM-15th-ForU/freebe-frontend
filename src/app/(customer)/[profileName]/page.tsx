import { Metadata } from "next";
import { PageParams } from "route-parameters";
import { Photographer } from "profile-types";
import BackgroundImage from "@/containers/customer/main/background-image";
import { defaultLinks } from "@/constants/photographer/mypage";
import InfoSheet from "@/containers/customer/main/info-sheet";
import { getPhotographerProfile } from "@/services/server/customer/photographer";
import { mainStyle } from "./main.css";

export async function generateMetadata({
  params,
}: {
  params: Pick<PageParams, "profileName">;
}): Promise<Metadata> {
  return {
    title: `@${params.profileName} | free:be`,
  };
}

const EXCEPTIONAL_PROFILE_NAMES = [
  ".env",
  "index.php",
  "resolve",
  "query",
  "dns-query",
];

const CustomerMainPage = async ({
  params,
}: {
  params: Pick<PageParams, "profileName">;
}) => {
  function isExceptionalName() {
    return EXCEPTIONAL_PROFILE_NAMES.includes(params.profileName);
  }

  const photographerProfile: Photographer = isExceptionalName()
    ? { linkInfos: [], message: "", profileName: "" }
    : await getPhotographerProfile(params.profileName);

  return (
    <div className={mainStyle}>
      <BackgroundImage mainImage={photographerProfile.bannerImg} />
      <InfoSheet
        defaultLinks={defaultLinks.map((link) => {
          return { ...link, src: params.profileName + link.src };
        })}
        {...photographerProfile}
      />
    </div>
  );
};

export default CustomerMainPage;
