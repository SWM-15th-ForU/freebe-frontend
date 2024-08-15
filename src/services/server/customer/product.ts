import { api } from "../core";

export async function getImageList(photographerId: string) {
  const response = await api
    .get(`customer/product/images/${photographerId}`)
    .json<{ data: string[] }>();
  const { data } = response;
  return data;
}
