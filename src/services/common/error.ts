import { HTTPError } from "ky";

const CUSTOMED_CODE: { [key: string]: string } = {
  PROFILE_NAME_ALREADY_EXISTS: "이미 존재하는 프로필명입니다.",
  PRODUCT_ALREADY_EXISTS: "이미 존재하는 상품입니다.",
  INVALID_MEMBER_ROLE_TYPE: "잘못된 아이디입니다.",
  INVALID_STATUS_TRANSITION: "상태 전환이 불가능합니다",
};

export function getCustomedErrorMessage(code?: string, message?: string) {
  if (code && CUSTOMED_CODE[code]) {
    return CUSTOMED_CODE[code];
  }
  if (message?.startsWith("Data truncation: Data too long for column")) {
    return "파일명이 너무 깁니다.";
  }
  return undefined;
}

export interface CustomedError extends HTTPError {
  customedMessage?: string;
}
