import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import { CustomButton } from "@/components/buttons/common-buttons";
import TextInput from "@/components/inputs/text-input";
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

const Confirm = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [cancelOpened, { open: openCancel, close: closeCancel }] =
    useDisclosure(false);
  const [dateOpened, { open: openDate, close: closeDate }] =
    useDisclosure(false);
  const { watch } = useFormContext<Details>();
  const [options, currentStatus, shootingDate] = watch([
    "options",
    "currentStatus",
    "shootingDate",
  ]);
  const prices = options.map((option) => option.price);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newPrice = prices.reduce((sum, price) => sum + price, 0);
    if (newPrice !== totalPrice) {
      setTotalPrice(newPrice);
    }
  }, [prices, totalPrice]);

  return (
    <div>
      <span className={sectionStyles.message}>
        확인 후 수락을 결정해 주세요.
      </span>
      <div className={sectionStyles.box}>
        <div className={sectionStyles.divider}>
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
        </div>
        <div className={sectionStyles.priceWrapper}>
          <span className={sectionStyles.title}>총 가격</span>
          <span className={sectionStyles.price}>{formatPrice(totalPrice)}</span>
        </div>
        <ShootingDate
          needShootingDate={
            compareStatus(currentStatus, "NEW") === "DONE" &&
            shootingDate === undefined
          }
        />
        {isActiveStatus(currentStatus) && (
          <div className={sectionStyles.buttonWrapper}>
            <div className={sectionStyles.wrapper}>
              <CustomButton
                title="수락하기"
                onClick={open}
                styleType="primary"
                size="sm"
                disabled={
                  compareStatus(currentStatus, "NEW") === "DONE" &&
                  shootingDate === undefined
                }
                style={{ flex: 1 }}
              />
              <CustomButton
                size="sm"
                styleType="line"
                onClick={openDate}
                title="일정 변경하기"
                style={{ flex: 1 }}
              />
            </div>
            <CustomButton
              title="거절하기"
              onClick={openCancel}
              styleType="secondary"
              size="sm"
            />
            <StatusModal
              close={close}
              opened={opened}
              targetStatus={getTargetStatus(currentStatus)}
            />
            <CancelModal close={closeCancel} opened={cancelOpened} />
            <DateModal close={closeDate} opened={dateOpened} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Confirm;
