import { parseTimeRequest } from "@/utils/date";
import { arrayToObject } from "@/utils/parse";
import { reservation } from "product-types";

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
  console.log(body);
  // TODO: client측 ky 인스턴스 생성 후 연결, reservationId 받아 반환
  return "reservation-id";
}
