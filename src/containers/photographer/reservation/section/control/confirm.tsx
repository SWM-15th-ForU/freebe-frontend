import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import TextInput from "@/components/inputs/text-input";
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

const Confirm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [cancelOpened, { open: openCancel, close: closeCancel }] =
    useDisclosure(false);
  const [dateOpened, { open: openDate, close: closeDate }] =
    useDisclosure(false);
  const { watch } = useFormContext<Details>();
  const [options, currentStatus, shootingDate, basicPrice] = watch([
    "options",
    "currentStatus",
    "shootingDate",
    "basicPrice",
  ]);
  const prices = options.map((option) => option.price);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newPrice = prices.reduce((sum, price) => sum + price, 0) + basicPrice;
    if (newPrice !== totalPrice) {
      setTotalPrice(newPrice);
    }
  }, [prices, totalPrice, basicPrice]);

  function handlePutNewDetails() {
    setIsEditing(false);
  }

  return (
    <div>
      <span className={sectionStyles.message}>
        확인 후 수락을 결정해 주세요.
      </span>
      <div className={sectionStyles.box}>
        <div className={sectionStyles.divider}>
          <ShootingPlace isEditing={isEditing} />
          <div>
            <ShootingDate
              needShootingDate={
                compareStatus(currentStatus, "NEW") === "DONE" &&
                shootingDate === undefined
              }
            />
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
          <div className={sectionStyles.priceWrapper}>
            <span className={sectionStyles.title}>총 가격</span>
            <span className={sectionStyles.price}>
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>
        <span className={sectionStyles.title}>기본 가격</span>
        <TextInput<Details>
          disabled
          inputSize="sm"
          formField="basicPrice"
          container={{ flex: 1 }}
        />
        <span className={sectionStyles.title}>추가 옵션</span>
        <div className={sectionStyles.optionWrapper}>
          {options.map((option, index) => (
            <OptionField key={option.title} optionIndex={index} />
          ))}
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
                onClick={open}
                styleType="primary"
                size="sm"
                disabled={
                  compareStatus(currentStatus, "NEW") === "DONE" &&
                  shootingDate === undefined
                }
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
