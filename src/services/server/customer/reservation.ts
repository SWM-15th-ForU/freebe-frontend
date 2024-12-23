import { Product, reservation } from "product-types";
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
  basicPlace: string;
  allowPreferredPlace: boolean;
}

export async function getFormBase(
  productId: string,
): Promise<
  Pick<reservation.FormType, "name" | "contact" | "instagram"> &
    Pick<
      Product,
      "options" | "items" | "basicPlace" | "basicPrice" | "allowPreferredPlace"
    >
> {
  const response = await api
    .get(`customer/reservation/form/${productId}`)
    .json<{ data: FormDataResponse }>();
  const { data } = response;

  return {
    ...data,
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
    shootingDate: data.shootingDate || undefined,
    preferredPlace: data.preferredPlace || undefined,
    shootingPlace: data.shootingPlace || undefined,
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
    totalPrice:
      data.basicPrice +
      options
        .map((option) => option.price)
        .reduce((sum: number, price: number) => sum + price, 0),
    notices: objectToArray(data.photoNotice, (arr) =>
      arr.sort().map(([_, content]) => content),
    ),
  };
}
