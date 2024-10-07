interface FormImage {
  url: string;
  file?: File;
}

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
    bannerImg?: string;
    profileImg?: string;
    profileName: string;
    message: string;
    linkInfos: LinkType[];
  }

  interface PhotographerForm extends Photographer {
    bannerImg?: FormImage;
    profileImg?: FormImage;
  }

  interface Join {
    profileName: string;
    ageAgreement: boolean;
    serviceAgreement: boolean;
    privacyAgreement: boolean;
    marketingAgreement: boolean;
  }
}
