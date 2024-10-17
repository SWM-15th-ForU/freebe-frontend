import { Metadata } from "next";
import { PageParams } from "route-parameters";
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

const CustomerMainPage = async ({
  params,
}: {
  params: Pick<PageParams, "profileName">;
}) => {
  const photographerProfile = await getPhotographerProfile(params.profileName);

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
