import { Item, Option, reservation } from "product-types";
import {
  CustomerDetails,
  CustomerReservationResponse,
  Option as OptionDetails,
} from "reservation-types";
import { objectToArray } from "@/utils/parse";
import { api } from "../core";

interface FormDataResponse {
  name: string;
  instagramId: string | null;
  basicPrice: number;
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

export async function getFormBase(productId: string): Promise<
  Pick<reservation.FormType, "name" | "contact" | "instagram"> & {
    options: Option[];
    items: Item[];
    basicPrice: number;
  }
> {
  const response = await api
    .get(`customer/reservation/form/${productId}`)
    .json<{ data: FormDataResponse }>();
  const { data } = response;

  return {
    name: data.name,
    contact: data.phoneNumber,
    basicPrice: data.basicPrice,
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
    instagram: data.instagramId || "",
  };
}

export async function getImageList(productId: string) {
  const response = await api
    .get(`customer/product/images/${productId}`)
    .json<{ data: string[] }>();
  const { data } = response;
  console.log(data);
  return data;
}

export async function getReservationDetails(
  formId: string,
): Promise<CustomerDetails> {
  const { data } = await api
    .get(`customer/reservation/${formId}`)
    .json<{ data: CustomerReservationResponse }>();

  const options = objectToArray(data.photoOptions, (arr) =>
    arr.map(([_, content]) => content),
  ) as OptionDetails[];
  const currentStatus =
    data.reservationStatus === "CANCELLED_BY_CUSTOMER" ||
    data.reservationStatus === "CANCELLED_BY_PHOTOGRAPHER"
      ? "CANCELLED"
      : data.reservationStatus;

  return {
    ...data,
    options,
    currentStatus,
    preferredDates: objectToArray(data.preferredDate, (arr) =>
      arr.sort().map(([_, content]) => content),
    ),
    productInfo: objectToArray(data.photoInfo, (arr) =>
      arr.map(([title, content]) => ({
        title,
        content,
      })),
    ),
    requestMemo: data.customerMemo,
    totalPrice: options
      .map((option) => option.price)
      .reduce((sum: number, price: number) => sum + price, 0),
  };
}
