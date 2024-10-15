type Description = string | null;

declare module "product-types" {
  type Status = "ACTIVE" | "INACTIVE";

  interface Notice {
    title: string;
    content: string;
  }
  interface Item {
    title: string;
    content: string;
    description: string;
  }

  interface Option {
    title: string;
    isFree: boolean;
    price: number;
    description: string;
  }

  interface Discount {
    title: string;
    description: string;
    discountType: "RATE" | "AMOUNT";
    discountValue: number | null;
  }

  interface FormImage {
    url: string;
    file?: File;
  }

  interface Product {
    title: string;
    subtitle: string;
    images: Image[];
    basicPrice: number;
    items: Item[];
    options: Option[];
    discounts: Discount[];
    notices: Notice[];
  }

  interface ProductFormdata extends Omit<Product, "images"> {}

  interface ProductListData {
    id: number;
    title: string;
    basicPrice: number;
    representImage: string;
  }

  interface Icon {
    title: string;
    image: string;
    id: string;
  }

  export interface ProductDetailResponseData {
    productTitle: string;
    productDescription: string | null;
    productImageUrls: string[];
    basicPrice: number;
    productComponents: {
      title: string;
      content: string;
      description: Description;
    }[];
    productOptions: {
      title: string;
      price: number;
      description: Description;
    }[];
    productDiscounts: {
      title: string;
      discountType: "RATE" | "AMOUNT";
      discountValue: number;
      description: Description;
    }[];
    // TODO: 백엔드 상품 상세 조회 api 명세 검토 필요
    notices: Notice[];
  }

  namespace reservation {
    export interface ImageListType {
      url: string;
      selected: boolean;
    }

    export interface ScheduleListType {
      date: Date | null;
      startTime: Date | null;
      endTime: Date | null;
    }

    export interface SelectedImageListType {
      url: string;
      index: number;
    }

    export interface SelectedOption {
      index: number;
      title: string;
      quantity: number;
      price: number;
    }

    export interface FormType {
      profileName: string;
      productId: number;
      name: string;
      contact: string;
      instagram: string;
      schedules: ScheduleListType[];
      options: SelectedOption[];
      memo: string;
      referenceImages: FormImage[];
      totalPrice: number;
      noticeAgreement: boolean;
    }
  }
}
