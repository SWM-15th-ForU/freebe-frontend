declare module "profile-types" {
  interface LinkType {
    src: string;
    name: string;
  }

  interface Photographer {
    banner: string;
    profileImg: string;
    instagramId: string;
    message: string;
    linkInfos: LinkType[];
  }

  interface Join {
    profileImg?: File;
    instagramId: string;
    serviceAgreement: boolean;
    privacyAgreement: boolean;
    marketingAgreement: boolean;
  }
}
