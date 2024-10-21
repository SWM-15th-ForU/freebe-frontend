import { ActiveStatus, Status } from "reservation-types";

export const statusTitles: Record<Status, string> = {
  NEW: "새 신청",
  IN_PROGRESS: "상담 중",
  WAITING_FOR_DEPOSIT: "입금 대기",
  WAITING_FOR_PHOTO: "촬영 대기",
  PHOTO_COMPLETED: "촬영 완료",
  CANCELLED: "취소",
};

export const statusInfos: Record<Status, string> = {
  NEW: "새로운 예약 신청서가 접수된 상태를 말해요. 촬영을 진행하려면 수락하기 버튼을 눌러 주세요.",
  IN_PROGRESS:
    "고객이 작성한 신청서 내용에서 협의가 필요한 내용이 있다면 진행 중 상태에서 고객과 대화해보세요. 상담이 끝났다면 입금 진행하기 버튼을 눌러 주세요.",
  WAITING_FOR_DEPOSIT:
    "협의를 마치고 촬영 전 입금을 기다리고 있어요. 입금이 완료되었다면 촬영 대기 상태로 변경해 주세요.",
  WAITING_FOR_PHOTO:
    "고객이 입금을 완료하고 촬영을 기다리고 있는 상태를 말해요. 즐거운 촬영 되세요!",
  PHOTO_COMPLETED: "이미 완료된 촬영이에요.",
  CANCELLED: "취소된 촬영이에요.",
};

export const customerStatusInfos: Record<Status, string> = {
  NEW: "신청서 제출이 완료되었습니다.",
  IN_PROGRESS: "촬영 상담이 진행 중입니다.",
  WAITING_FOR_DEPOSIT: "입금을 기다리는 중입니다.",
  WAITING_FOR_PHOTO: "촬영 대기 중입니다. 즐거운 촬영 되세요!",
  PHOTO_COMPLETED: "완료된 촬영입니다.",
  CANCELLED: "취소된 촬영입니다.",
};

export const progressStatus: Record<ActiveStatus, string> = {
  NEW: "수락하기",
  IN_PROGRESS: "입금 시작",
  WAITING_FOR_DEPOSIT: "입금 완료",
  WAITING_FOR_PHOTO: "완료하기",
};
