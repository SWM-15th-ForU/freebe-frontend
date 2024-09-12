declare module "profile-types" {
  interface LinkType {
    src: string;
    name: string;
  }

  interface ProfileResponse {
    bannerImageUrl: string;
    profileImageUrl: string;
    instagramId: string;
    introductionContent: string;
    linkInfos: { linkTitle: string; linkUrl: string }[];
  }
  interface Photographer {
    banner: string;
    profileImg: string;
    instagramId: string;
    message: string;
    linkInfos: LinkType[];
  }
}
