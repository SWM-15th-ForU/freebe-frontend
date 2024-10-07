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
  // TODO: 더미 데이터 제거
  // const response = await api
  //   .get(`customer/reservation/form/${productId}`)
  //   .json<{ data: FormDataResponse }>();
  // const { data } = response;

  const data: FormDataResponse = {
    name: "이유리",
    phoneNumber: "010-7554-3789",
    instagramId: null,
    basicPrice: 100000,
    productComponentDtoList: [
      {
        title: "기본 가격",
        content: "100000",
        description: null,
      },
      {
        title: "촬영 시간",
        content: "2시간",
        description:
          "촬영시간은 의상교체 및 메이크업을 진행하는 시간까지 포함된 시간입니다.",
      },
      {
        title: "보정본 수",
        content: "원본 5장 + 보정본 5장",
        description:
          "원본은 제가 직접 셀렉해서 제공해드립니다.(고객분들과 셀렉하고 싶은 방향성을 논의 후에 진행합니다.)",
      },
    ],
    productOptionDtoList: [
      {
        title: "인원 추가 (1인)",
        price: 30000,
        description: null,
      },
      {
        title: "의상 대여",
        price: 15000,
        description: "의상대여는 1개만 가능합니다.",
      },
    ],
  };

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
  };
}
