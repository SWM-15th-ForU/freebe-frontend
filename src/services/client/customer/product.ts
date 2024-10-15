import { Notice } from "product-types";
import apiClient from "../core";

export async function getProductNotices(productId: string): Promise<Notice[]> {
  const { data } = await apiClient
    .get(`customer/notice/${productId}`)
    .json<{ data: Notice[] }>();
  return data;
}
