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

  export interface Product {
    title: string;
    subtitle: string;
    images: any[];
    items: Item[];
    options: Option[];
  }
}
