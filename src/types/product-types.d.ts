declare module "product-types" {
  export interface Item {
    title: string;
    content: string;
    hasDescription: boolean;
    description?: string;
  }

  export interface Option {
    title: string;
    isFree: boolean;
    price?: number;
  }

  export interface Discount {
    title: string;
    hasDescription: boolean;
    description?: string;
    discountType: "rate" | "amount";
    rate?: number;
    amount?: number;
  }

  export type Image = File;

  export interface Product {
    title: string;
    subtitle: string;
    images: Image[];
    items: Item[];
    options: Option[];
    discounts: Discount[];
  }
}
