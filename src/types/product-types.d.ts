declare module "product-types" {
  export type Status = "ACTIVE" | "INACTIVE";
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
    hasDescription: boolean;
    description?: string;
  }

  export interface Discount {
    title: string;
    hasDescription: boolean;
    description?: string;
    discountType: "RATE" | "AMOUNT";
    discountValue: number | null;
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

  export interface ProductFormdata extends Omit<Product, "images"> {}

  export interface Icon {
    title: string;
    image: string;
    id: string;
  }
}
