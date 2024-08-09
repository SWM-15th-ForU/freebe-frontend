import { getData } from "../core";

// TODO: 커스텀 타입 공통화하기
interface ProductBanner {
  id: string;
  title: string;
  image: string;
  totalReservation: number;
  isOpen: boolean;
}

export async function getProductList(): Promise<ProductBanner[]> {
  return getData("product/registered-product/8");
}
