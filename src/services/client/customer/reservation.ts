import { reservation } from "product-types";
import { parseTimeRequest } from "@/utils/date";
import { arrayToObject } from "@/utils/parse";
import apiClient from "../core";

export async function postReservation(form: reservation.FormType) {
  const formData = new FormData();
  const inputData = {
    profileName: form.profileName,
    productId: form.productId,
    instagramId: form.instagram,
    preferredDates: arrayToObject(
      form.schedules.map((schedule) => {
        return {
          ...schedule,
          startTime: parseTimeRequest(schedule.startTime, "00:00"),
          endTime: parseTimeRequest(schedule.endTime, "24:00"),
        };
      }),
    ),
    photoOptions: arrayToObject(
      form.options.map((option) => {
        return {
          title: option.title,
          quantity: option.quantity,
          price: option.price,
        };
      }),
    ),
    customerMemo: form.memo,
    existingImages: form.referenceImages.map((image) =>
      image.file !== undefined ? null : image.url,
    ),
    totalPrice: form.totalPrice,
    noticeAgreement: form.noticeAgreement,
  };
  formData.append(
    "request",
    new Blob([JSON.stringify(inputData)], { type: "application/json" }),
  );

  form.referenceImages.forEach((image) => {
    if (image.file) {
      formData.append("images", image.file);
    }
  });

  const response = await apiClient
    .post("customer/reservation", { body: formData })
    .json<{ data: number }>();
  const { data } = response;
  return data;
}

export async function cancelReservation(
  id: number,
  cancellationReason: string,
) {
  const body = {
    updateStatus: "CANCELLED_BY_CUSTOMER",
    cancellationReason,
  };
  const response = await apiClient.put(`customer/reservation/${id}`, {
    json: body,
  });
  if (!response.ok) {
    throw new Error();
  }
}
