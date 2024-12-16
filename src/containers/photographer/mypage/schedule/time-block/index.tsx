"use client";

import { useState } from "react";
import { TimeUnitType } from "calender-types";
import Chip from "@/components/common/chip";
import { scheduleStyles, timeblockStyles } from "../schedule.css";
import ConfirmModal from "./confirm-modal";

const TimeBlock = ({ currentUnit }: { currentUnit: TimeUnitType }) => {
  const [requestedUnit, setRequestedUnit] = useState<TimeUnitType | null>(null);

  function requestNewUnit(target: TimeUnitType) {
    if (target !== currentUnit) {
      setRequestedUnit(target);
    }
  }

  function cancelRequest() {
    setRequestedUnit(null);
  }

  return (
    <div className={timeblockStyles.container}>
      <span className={scheduleStyles.title}>예약 시간</span>
      <div className={timeblockStyles.wrapper}>
        <Chip
          name="30분마다"
          onClick={() => requestNewUnit("THIRTY_MINUTES")}
          selected={currentUnit === "THIRTY_MINUTES"}
        />
        <Chip
          name="1시간마다"
          onClick={() => requestNewUnit("SIXTY_MINUTES")}
          selected={currentUnit === "SIXTY_MINUTES"}
        />
        <span className={timeblockStyles.text}>오픈</span>
      </div>
      <ConfirmModal onClose={cancelRequest} requestedUnit={requestedUnit} />
    </div>
  );
};

export default TimeBlock;
