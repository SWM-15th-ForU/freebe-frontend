import { PhotographerForm, ProfileResponse } from "profile-types";
import { api } from "../../core";

export async function getCurrentProfile(): Promise<PhotographerForm> {
  const { data } = await api
    .get("photographer/profile")
    .json<{ data: ProfileResponse }>();
  return {
    bannerImg:
      data.bannerImageUrl !== null ? { url: data.bannerImageUrl } : undefined,
    profileImg:
      data.profileImageUrl !== null ? { url: data.profileImageUrl } : undefined,
    profileName: data.profileName,
    message: data.introductionContent,
    linkInfos: data.linkInfos.map((link) => {
      return { name: link.linkTitle, src: link.linkUrl };
    }),
  };
}
