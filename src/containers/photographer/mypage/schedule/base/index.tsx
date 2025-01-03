"use client";

import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import { BaseScheduleForm, TimeUnitType } from "calender-types";
import { Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { daysArray } from "@/constants/schedule";
import { CustomButton } from "@/components/buttons/common-buttons";
import popToast from "@/components/common/toast";
import { responseHandler } from "@/services/common/error";
import { putNewBaseSchedule } from "@/services/client/photographer/mypage/schedule";
import { scheduleStyles } from "../schedule.css";
import DaySchedule from "./day-schedule";
import { baseScheduleStyles } from "./base.css";
import ConfirmModal from "./confirm-modal";

const BaseSchedule = ({
  unit,
  currentSchedule,
}: {
  unit: TimeUnitType;
  currentSchedule: BaseScheduleForm;
}) => {
  const [opened, { toggle }] = useDisclosure(false);
  const [requested, { open: request, close: cancelRequest }] =
    useDisclosure(false);
  const method = useForm<BaseScheduleForm>({
    defaultValues: currentSchedule,
  });
  const { handleSubmit } = method;

  const onSubmit = async (form: BaseScheduleForm) => {
    responseHandler(
      putNewBaseSchedule(form),
      () => popToast("저장이 완료되었습니다."),
      () => {
        popToast("다시 시도해주세요.", "저장에 실패했습니다.", true);
      },
    );
    cancelRequest();
  };

  return (
    <div>
      <FormProvider {...method}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={scheduleStyles.head}>
            <span className={scheduleStyles.title}>기본 스케줄</span>
            <button
              type="button"
              onClick={toggle}
              className={baseScheduleStyles.control}
            >
              <Image
                src="/icons/right.svg"
                alt="메뉴"
                width={16}
                height={16}
                className={
                  opened
                    ? baseScheduleStyles.closeIcon
                    : baseScheduleStyles.openIcon
                }
              />
            </button>
          </div>
          <Collapse in={opened}>
            <div className={scheduleStyles.body}>
              {daysArray.map((day) => (
                <DaySchedule day={day} unit={unit} key={day} />
              ))}
            </div>
            <CustomButton
              type="button"
              title="저장하기"
              size="sm"
              styleType="primary"
              style={{ maxWidth: 600, margin: "24px auto 0px" }}
              onClick={request}
            />
            <ConfirmModal opened={requested} close={cancelRequest} />
          </Collapse>
        </form>
      </FormProvider>
    </div>
  );
};

export default BaseSchedule;
