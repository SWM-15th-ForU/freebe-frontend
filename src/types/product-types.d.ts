declare module "product-types" {
  export interface Item {
    title: undefined | string;
    content: undefined | string;
    description?: undefined | string;
  }

  export interface Option {
    title: undefined | string;
    isFree: boolean;
    price?: number;
  }

  export interface Product {
    title: undefined | string;
    subtitle: undefined | string;
    images: any[];
    items: Item[];
    options: Option[];
  }
}
