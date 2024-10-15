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
    introductionContent: string | null;
    linkInfos: { linkTitle: string; linkUrl: string }[];
  }

  // TODO: 백엔드 api 명세 확인 필요
  interface PhotographerProfileResponse extends ProfileResponse {
    contact: string;
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
    contact: string;
  }

  interface Join {
    contact: string;
    profileName: string;
    serviceAgreement: boolean;
    privacyAgreement: boolean;
    marketingAgreement: boolean;
  }

  interface Notice {
    title: string;
    content: string;
  }

  interface NoticeForm {
    notices: Notice[];
  }
}
