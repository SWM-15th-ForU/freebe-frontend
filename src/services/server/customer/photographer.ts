import { Photographer } from "profile-types";
import { api } from "../core";

interface ProfileResponse {
  bannerImageUrl: string;
  profileImageUrl: string;
  instagramId: string;
  introductionContent: string;
  linkInfos: { linkTitle: string; linkUrl: string }[];
}

export async function getPhotographerProfile(
  photographerId: number,
): Promise<Photographer> {
  const response = await api.get(`customer/profile/${photographerId}`);
  const { data } = await response.json<{ data: ProfileResponse }>();
  return {
    ...data,
    banner: data.bannerImageUrl,
    profileImg: data.profileImageUrl,
    message: data.introductionContent,
    linkInfos: data.linkInfos.map((link) => {
      return { name: link.linkTitle, src: link.linkUrl };
    }),
  };
}
