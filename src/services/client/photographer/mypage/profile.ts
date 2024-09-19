import { Photographer } from "profile-types";
import apiClient from "../../core";

export async function putProfile(newProfile: Photographer) {
  // TODO: 인스타그램 아이디 수정 여부 + 이미지 파일 형식 체크
  const body = {
    bannerImageUrl: newProfile.banner,
    profileImageUrl: newProfile.profileImg,
    instagramId: newProfile.instagramId,
    introductionContent: newProfile.message,
    linkInfos: newProfile.linkInfos.map((link) => {
      return {
        linkTitle: link.name,
        linkUrl: link.src,
      };
    }),
  };
  await apiClient.put("photographer/profile", {
    body: JSON.stringify(body),
  });
}
