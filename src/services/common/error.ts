import { HTTPError } from "ky";

export interface CustomedError extends HTTPError {
  customedMessage?: string;
}

export const CUSTOMED_CODE: { [key: string]: string } = {
  PROFILE_NAME_ALREADY_EXISTS: "이미 존재하는 아이디입니다.",
  PRODUCT_ALREADY_EXISTS: "이미 존재하는 상품입니다.",
  ACCESS_DENIED: "권한이 없습니다.",
  INVALID_STATUS_TRANSITION: "현재 신청 상태를 변경할 수 없습니다.",
  PRODUCT_INACTIVE_STATUS: "현재 예약할 수 없는 상품입니다.",
  COMPONENT_TITLE_ALREADY_EXISTS:
    "같은 이름의 항목은 하나만 등록할 수 있습니다.",
  PRODUCT_NOT_FOUND: "존재하지 않는 상품입니다.",
  MEMBER_NOT_FOUND: "존재하지 않는 작가입니다.",
  PROFILE_NAME_NOT_FOUND: "존재하지 않는 아이디입니다.",
  NO_RESERVATION_FORM: "존재하지 않는 신청서입니다.",
  PRODUCT_IMAGE_NOT_FOUND: "상품의 이미지가 존재하지 않습니다.",
  INVALID_SHOOTING_DATE: "해당 날짜로 촬영 일정을 확정할 수 없습니다.",
  INVALID_SHOOTING_TIME: "해당 시간으로 촬영 일정을 확정할 수 없습니다.",
  LINK_TITLE_DUPLICATE: "같은 이름의 링크를 등록할 수 없습니다.",
  NOTICE_TITLE_DUPLICATE: "같은 제목의 공지사항을 등록할 수 없습니다.",
  MAXIMUM_UPLOAD_SIZE_EXCEEDED: "이미지의 용량이 너무 큽니다.",
  NOT_FOUND_ESSENTIAL_TITLE:
    "공지사항에는 '취소 및 환불 규정', '예약 변경 규정'이 필수로 포함되어야 합니다.",
};

const CUSTOMED_STATUS: { [key: number]: string } = {
  404: "존재하지 않습니다.",
};

export function getCustomedErrorMessage(
  status: number,
  code?: string,
  message?: string,
) {
  if (code && CUSTOMED_CODE[code]) {
    return CUSTOMED_CODE[code];
  }
  if (message?.startsWith("Data truncation: Data too long for column")) {
    return "파일명이 너무 깁니다.";
  }
  if (CUSTOMED_STATUS[status]) {
    return CUSTOMED_STATUS[status];
  }
  return undefined;
}

export async function responseHandler<T>(
  request: Promise<T>,
  successCallback: (response: T) => void,
  failureCallback?: (message?: string) => void,
) {
  try {
    const response = await request;
    successCallback(response);
  } catch (error) {
    console.error("request failed: ", error);
    if (
      typeof error === "object" &&
      error !== null &&
      "customedMessage" in error
    ) {
      const { customedMessage } = error as CustomedError;
      if (failureCallback !== undefined) {
        failureCallback(customedMessage);
      }
    } else if (failureCallback !== undefined) {
      failureCallback();
    }
  }
}
