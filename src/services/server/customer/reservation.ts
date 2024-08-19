import { Item, Option } from "product-types";
import { api } from "../core";

interface FormDataResponse {
  name: string;
  phoneNumber: string;
  productComponentDtoList: {
    title: string;
    content: string;
    description: string | null;
  }[];
  productOptionDtoList: {
    title: string;
    price: number;
    description: string | null;
  }[];
}

export async function getFormBase(productId: string) {
  const response = await api
    .get(`customer/reservation/form/${productId}`)
    .json<{ data: FormDataResponse }>();
  const { data } = response;
  const result: {
    name: string;
    options: Option[];
    phoneNumber: string;
    items: Item[];
  } = {
    name: data.name,
    phoneNumber: data.phoneNumber,
    options: data.productOptionDtoList.map((option) => {
      return {
        title: option.title,
        hasDescription: option.description !== "",
        isFree: option.price === 0,
        price: option.price,
        description: option.description || "",
      };
    }),
    items: data.productComponentDtoList.map((item) => {
      return {
        title: item.title,
        content: item.content,
        hasDescription: item.description !== "",
        description: item.description || "",
      };
    }),
  };
  return result;
}

export async function getImageList(photographerId: string) {
  const response = await api
    // TODO: photographerId로 수정
    .get(`customer/product/images/1`)
    .json<{ data: string[] }>();
  const { data } = response;
  console.log(data);
  return data;
}
