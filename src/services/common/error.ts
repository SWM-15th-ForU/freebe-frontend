import { HTTPError } from "ky";

export interface CustomedError extends HTTPError {
  customedMessage?: string;
}

const CUSTOMED_CODE: { [key: string]: string } = {
  PROFILE_NAME_ALREADY_EXISTS: "이미 존재하는 프로필명입니다.",
  PRODUCT_ALREADY_EXISTS: "이미 존재하는 상품입니다.",
  INVALID_MEMBER_ROLE_TYPE: "잘못된 아이디입니다.",
  INVALID_STATUS_TRANSITION: "상태 전환이 불가능합니다",
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
