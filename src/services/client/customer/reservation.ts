import { parseTimeRequest } from "@/utils/date";
import { arrayToObject } from "@/utils/parse";
import { reservation } from "product-types";
import apiClient from "../core";

interface ProductDatas {
  photographerId: number;
  productTitle: string;
  infos: {
    [key: string]: string;
  }[];
}

export async function postReservation(
  formData: reservation.FormType,
  productData: ProductDatas,
) {
  // TODO: request body 형식 일부 수정
  const body = {
    photographerId: productData.photographerId,
    instagramId: formData.instagram,
    productTitle: productData.productTitle,
    photoInfo: productData.infos,
    preferredDates: arrayToObject(
      formData.schedules.map((schedule) => {
        return {
          ...schedule,
          startTime: parseTimeRequest(schedule.startTime, "00:00"),
          endTime: parseTimeRequest(schedule.endTime, "24:00"),
        };
      }),
    ),
    productOptions: formData.options.map((option) => {
      return {
        title: option.title,
        quantity: option.quantity,
        price: option.price,
      };
    }),
    customerMemo: formData.memo,
    preferredImages: formData.referenceImages,
    totalPrice: formData.totalPrice,
    serviceTermAgreement: formData.serviceAgreement,
    photographerTermAgreement: formData.photographerAgreement,
  };

  const response = await apiClient
    .post("customer/reservation", { json: body })
    .json<{ data: number }>();
  const { data } = response;
  return data;
}
