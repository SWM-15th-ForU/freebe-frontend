import { Metadata, ResolvingMetadata } from "next";
import { PageParams } from "route-parameters";
import BackgroundImage from "@/containers/customer/main/background-image";
import InfoSheet from "@/containers/customer/main/info-sheet";
import { getPhotographerProfile } from "@/services/server/customer/photographer";
import { LinkType } from "profile-types";
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
  const defaultLinks: LinkType[] = [
    { name: "상품 선택하기", src: "/products" },
    { name: "일정 확인하기 ", src: "/schedules" },
    { name: "자주 묻는 질문", src: "/faqs" },
  ];

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
