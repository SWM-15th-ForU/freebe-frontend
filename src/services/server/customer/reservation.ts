import { Item, Option } from "product-types";
import {
  CustomerDetails,
  CustomerReservationResponse,
  Option as OptionDetails,
} from "reservation-types";
import { objectToArray } from "@/utils/parse";
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
    .get(`customer/product/images/${photographerId}`)
    .json<{ data: string[] }>();
  const { data } = response;
  console.log(data);
  return data;
}

const dummyData: CustomerReservationResponse = {
  reservationStatus: "PHOTO_COMPLETED",
  productTitle: "우정스냅",
  photoInfo: {
    "기본 가격": "160,000",
    "촬영 장소": "테이프콜 스튜디오",
    "상품 구성": "보정본 4장 + 네컷 or ID카드 3종 + 원본 전체",
  },
  preferredDate: {
    "1": {
      date: "2024-09-01",
      startTime: "15:00:00",
      endTime: "17:00:00",
    },
    "2": {
      date: "2024-09-01",
      startTime: "15:00:00",
      endTime: "17:00:00",
    },
    "3": {
      date: "2024-09-01",
      startTime: "15:00:00",
      endTime: "17:00:00",
    },
  },
  photoOptions: {
    "1": {
      title: "인원 추가",
      quantity: 1,
      price: 30000,
    },
    "2": {
      title: "착장 추가",
      quantity: 2,
      price: 40000,
    },
  },
  customerMemo: "history 테이블 업데이트 후 새 신청서2!",
};

export async function getReservationDetails(
  reservationId: number,
): Promise<CustomerDetails> {
  // const { data } = await api
  //   .get(`customer/reservation/${reservationId}`)
  //   .json<{ data: CustomerReservationResponse }>();

  const data = dummyData as CustomerReservationResponse;
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
