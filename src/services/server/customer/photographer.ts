import { Photographer, ProfileResponse } from "profile-types";
import { api } from "../core";

export async function getPhotographerProfile(
  profileName: string,
): Promise<Photographer> {
  const response = await api.get(`customer/profile/${profileName}`);
  const { data } = await response.json<{ data: ProfileResponse }>();

  return {
    profileName: data.profileName,
    bannerImg: data.bannerImageUrl || undefined,
    profileImg: data.profileImageUrl || undefined,
    message: data.introductionContent || "",
    linkInfos: data.linkInfos.map((link) => {
      return { name: link.linkTitle, src: link.linkUrl };
    }),
  };
}
