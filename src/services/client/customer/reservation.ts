import { reservation } from "product-types";
import { parseTimeRequest } from "@/utils/date";
import { arrayToObject } from "@/utils/parse";
import apiClient from "../core";

export async function postReservation(formData: reservation.FormType) {
  const body = {
    profileName: formData.profileName,
    instagramId: formData.instagram,
    preferredDates: arrayToObject(
      formData.schedules.map((schedule) => {
        return {
          ...schedule,
          startTime: parseTimeRequest(schedule.startTime, "00:00"),
          endTime: parseTimeRequest(schedule.endTime, "24:00"),
        };
      }),
    ),
    photoOptions: arrayToObject(
      formData.options.map((option) => {
        return {
          title: option.title,
          quantity: option.quantity,
          price: option.price,
        };
      }),
    ),
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

export async function cancelReservation(
  id: number,
  cancellationReason: string,
) {
  const body = {
    cancellationReason,
  };
  const response = await apiClient.put(`customer/reservation/${id}`, {
    json: body,
  });
  if (!response.ok) {
    throw new Error();
  }
}
