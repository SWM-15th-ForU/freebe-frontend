import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import popToast from "@/components/common/toast";
import { putReservationDetails } from "@/services/client/photographer/reservations";
import { responseHandler } from "@/services/common/error";
import { progressStatus } from "@/constants/common/reservation";
import { isActiveStatus } from "@/utils/type-guards";
import { useDisclosure } from "@mantine/hooks";
import { compareStatus, getTargetStatus } from "@/utils/reservation";
import { formatPrice } from "@/utils/parse";
import OptionField from "../fields/option-field";
import { sectionStyles } from "../section.css";
import StatusModal from "./status-modal";
import CancelModal from "./cancel-modal";
import ShootingDate from "./shooting-date";
import DateModal from "./date-modal";
import ShootingPlace from "./shooting-place";
import NoticeModal from "./notice-modal";

const Confirm = () => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  // TODO: 모달 분리하기
  const [opened, { open, close }] = useDisclosure(false);
  const [cancelOpened, { open: openCancel, close: closeCancel }] =
    useDisclosure(false);
  const [dateOpened, { open: openDate, close: closeDate }] =
    useDisclosure(false);
  const [noticeOpened, { open: openNotice, close: closeNotice }] =
    useDisclosure(false);
  const { watch, getValues } = useFormContext<Details>();
  const [
    options,
    currentStatus,
    shootingDate,
    shootingPlace,
    basicPrice,
    notices,
  ] = watch([
    "options",
    "currentStatus",
    "shootingDate",
    "shootingPlace",
    "basicPrice",
    "notices",
  ]);
  const prices = options.map((option) => option.price);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newPrice = prices.reduce((sum, price) => sum + price, 0) + basicPrice;
    if (newPrice !== totalPrice) {
      setTotalPrice(newPrice);
    }
  }, [prices, totalPrice, basicPrice]);

  async function handlePutNewDetails() {
    const reservationNumber = getValues("reservationNumber");
    await responseHandler(
      putReservationDetails({
        reservationNumber,
        shootingDate,
        shootingPlace,
        currentStatus,
      }),
      () => {
        setIsEditing(false);
        popToast("수정사항이 반영되었습니다.");
        router.refresh();
      },
      () => {
        popToast("다시 시도해주세요.", "수정에 실패했습니다.", true);
      },
    );
  }

  function progressNextStatus() {
    if (
      compareStatus(currentStatus, "NEW") === "DONE" &&
      (shootingDate === undefined || shootingPlace === undefined)
    ) {
      popToast(
        "'수정하기'를 누른 다음 촬영 장소와 일정을 먼저 확정해주세요.",
        "아직 다음 단계로 넘어갈 수 없어요.",
      );
    } else {
      open();
    }
  }

  return (
    <div>
      <div className={sectionStyles.header}>
        <span className={sectionStyles.message}>
          확인 후 수락을 결정해 주세요.
        </span>
        <button
          type="button"
          className={sectionStyles.detail}
          onClick={openNotice}
        >
          공지사항 확인하기
        </button>
        <NoticeModal
          notices={notices}
          opened={noticeOpened}
          close={closeNotice}
        />
      </div>
      <div className={sectionStyles.box}>
        <div className={sectionStyles.divider}>
          <ShootingPlace isEditing={isEditing} />
          <div>
            <ShootingDate />
            {isEditing && (
              <CustomButton
                size="sm"
                styleType="line"
                onClick={openDate}
                title="일정 변경하기"
                style={{ flex: 1, marginTop: 10 }}
              />
            )}
          </div>
        </div>
        <div className={sectionStyles.divider}>
          <div className={sectionStyles.priceWrapper}>
            <span className={sectionStyles.title}>총 가격</span>
            <span className={sectionStyles.price}>
              {formatPrice(totalPrice)}
            </span>
          </div>
          <div className={sectionStyles.priceWrapper}>
            <span className={sectionStyles.title}>기본 가격</span>
            <span className={sectionStyles.content}>
              {formatPrice(basicPrice)}
            </span>
          </div>
          {options.length > 0 && (
            <div>
              <span className={sectionStyles.title}>추가 옵션</span>
              <div className={sectionStyles.optionWrapper}>
                {options.map((option) => (
                  <OptionField key={option.title} option={option} />
                ))}
              </div>
            </div>
          )}
        </div>
        {isActiveStatus(currentStatus) &&
          (isEditing ? (
            <div className={sectionStyles.buttonWrapper}>
              <CustomButton
                title="저장하기"
                size="sm"
                styleType="primary"
                onClick={handlePutNewDetails}
              />
              <DateModal close={closeDate} opened={dateOpened} />
            </div>
          ) : (
            <div className={sectionStyles.buttonWrapper}>
              <div className={sectionStyles.wrapper}>
                <CustomButton
                  title="거절하기"
                  onClick={openCancel}
                  styleType="secondary"
                  size="sm"
                  style={{ flex: 1 }}
                />
                <CustomButton
                  size="sm"
                  styleType="line"
                  onClick={() => setIsEditing(true)}
                  title="수정하기"
                  style={{ flex: 1 }}
                />
              </div>
              <CustomButton
                title={progressStatus[currentStatus]}
                onClick={progressNextStatus}
                styleType="primary"
                size="sm"
              />
              <StatusModal
                close={close}
                opened={opened}
                targetStatus={getTargetStatus(currentStatus)}
              />
              <CancelModal close={closeCancel} opened={cancelOpened} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Confirm;
