declare module "common-types" {
  export interface ProgressType {
    total: number;
    current: number;
  }

  interface FilterItemType {
    id: number;
    name: string;
  }
}
