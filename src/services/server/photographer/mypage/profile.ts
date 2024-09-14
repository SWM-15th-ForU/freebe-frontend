import { Photographer, ProfileResponse } from "profile-types";
import { api } from "../../core";

export async function getCurrentProfile(): Promise<Photographer> {
  const { data } = await api
    .get("photographer/profile")
    .json<{ data: ProfileResponse }>();
  return {
    banner: data.bannerImageUrl,
    message: data.introductionContent,
    profileImg: data.profileImageUrl,
    instagramId: data.instagramId || "",
    linkInfos: data.linkInfos.map((link) => {
      return { name: link.linkTitle, src: link.linkUrl };
    }),
  };
}
