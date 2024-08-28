declare module "product-types" {
  export type Status = "ACTIVE" | "INACTIVE";
  export interface Item {
    title: string;
    content: string;
    description: string;
  }

  export interface Option {
    title: string;
    isFree: boolean;
    price: number;
    description: string;
  }

  export interface Discount {
    title: string;
    description: string;
    discountType: "RATE" | "AMOUNT";
    discountValue: number | null;
  }

  export type Image = string;

  export interface Product {
    title: string;
    subtitle: string;
    images: Image[];
    items: Item[];
    options: Option[];
    discounts: Discount[];
  }

  export interface ProductFormdata extends Omit<Product, "images"> {}

  export interface ProductListData {
    id: number;
    title: string;
    representImage: string;
  }

  export interface Icon {
    title: string;
    image: string;
    id: string;
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
      referenceImages: string[];
      name: string;
      contact: string;
      instagram: string;
      schedules: ScheduleListType[];
      options: SelectedOption[];
      memo: string;
      totalPrice: number;
      serviceAgreement: boolean;
      photographerAgreement: boolean;
    }
  }
}
