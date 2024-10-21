"use client";

import { usePathname } from "next/navigation";
import { CustomerDetails, StatusHistory } from "reservation-types";
import { useDisclosure } from "@mantine/hooks";
import ReservationStatus from "@/containers/common/status";
import { compareStatus, isCustomerAbleToCancel } from "@/utils/reservation";
import { customerStatusInfos } from "@/constants/common/reservation";
import Chip from "@/components/common/chip";
import popToast from "@/components/common/toast";
import CancelModal from "./cancel-modal";
import { detailStyles } from "./detail.css";

const Status = ({
  productTitle,
  currentStatus,
}: Pick<CustomerDetails, "productTitle" | "currentStatus">) => {
  const url = usePathname();
  const [opened, { close, open }] = useDisclosure(false);

  const statusHistory: StatusHistory = {
    NEW: {
      current: compareStatus(currentStatus, "NEW"),
    },
    IN_PROGRESS: {
      current: compareStatus(currentStatus, "IN_PROGRESS"),
    },
    WAITING_FOR_DEPOSIT: {
      current: compareStatus(currentStatus, "WAITING_FOR_DEPOSIT"),
    },
    WAITING_FOR_PHOTO: {
      current: compareStatus(currentStatus, "WAITING_FOR_PHOTO"),
    },
    PHOTO_COMPLETED: {
      current: compareStatus(currentStatus, "PHOTO_COMPLETED"),
    },
    CANCELLED: {
      current: compareStatus(currentStatus, "CANCELLED"),
    },
  };

  async function handleExport() {
    try {
      await navigator.clipboard.writeText(`https://www.freebe.co.kr${url}`);
      popToast(
        "링크를 통해 예약 현황을 확인할 수 있어요!",
        "클립보드에 복사되었습니다.",
      );
    } catch (error) {
      popToast("다시 시도해 주세요.", "오류가 발생했습니다.");
    }
  }

  return (
    <div className={detailStyles.container}>
      <span className={detailStyles.title}>{productTitle}</span>
      <span className={detailStyles.message}>
        {customerStatusInfos[currentStatus]}
      </span>
      {currentStatus !== "CANCELLED" && (
        <div className={detailStyles.status}>
          <ReservationStatus statusHistory={statusHistory} noInformation />
        </div>
      )}
      <div className={detailStyles.chips}>
        <Chip name="링크 복사" styleType="highlight" onClick={handleExport} />
        {isCustomerAbleToCancel(currentStatus) && (
          <Chip name="취소하기" styleType="highlight" onClick={open} />
        )}
      </div>
      <CancelModal close={close} opened={opened} />
    </div>
  );
};

export default Status;
