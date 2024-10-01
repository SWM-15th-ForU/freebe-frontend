declare module "profile-types" {
  interface LinkType {
    src: string;
    name: string;
  }

  interface ProfileResponse {
    bannerImageUrl: string | null;
    profileImageUrl: string | null;
    profileName: string;
    introductionContent: string;
    linkInfos: { linkTitle: string; linkUrl: string }[];
  }
  interface Photographer {
    banner?: string;
    profileImg?: string;
    profileName: string;
    message: string;
    linkInfos: LinkType[];
  }

  interface Join {
    profileName: string;
    serviceAgreement: boolean;
    privacyAgreement: boolean;
    marketingAgreement: boolean;
  }
}
