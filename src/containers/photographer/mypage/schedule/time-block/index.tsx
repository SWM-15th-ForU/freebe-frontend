"use client";

import { TimeUnitType } from "calender-types";
import Chip from "@/components/common/chip";
import { useDisclosure } from "@mantine/hooks";
import { scheduleStyles, timeblockStyles } from "../schedule.css";
import ConfirmModal from "./confirm-modal";

const UNIT_MAPPING: Record<TimeUnitType, TimeUnitType> = {
  SIXTY_MINUTES: "THIRTY_MINUTES",
  THIRTY_MINUTES: "SIXTY_MINUTES",
};

const TimeBlock = ({ currentUnit }: { currentUnit: TimeUnitType }) => {
  const [opened, { open, close }] = useDisclosure(false);

  function handleSelectUnit(selectedUnit: TimeUnitType) {
    if (selectedUnit !== currentUnit) {
      open();
    }
  }

  return (
    <div className={timeblockStyles.container}>
      <span className={scheduleStyles.title}>예약 시간</span>
      <div className={timeblockStyles.wrapper}>
        <Chip
          name="30분마다"
          onClick={() => handleSelectUnit("THIRTY_MINUTES")}
          selected={currentUnit === "THIRTY_MINUTES"}
        />
        <Chip
          name="1시간마다"
          onClick={() => handleSelectUnit("SIXTY_MINUTES")}
          selected={currentUnit === "SIXTY_MINUTES"}
        />
        <span className={timeblockStyles.text}>오픈</span>
      </div>
      <ConfirmModal
        opened={opened}
        close={close}
        requestedUnit={UNIT_MAPPING[currentUnit]}
      />
    </div>
  );
};

export default TimeBlock;
