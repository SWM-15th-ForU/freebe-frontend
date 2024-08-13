"use client";

import ScheduleEdit from "@/containers/customer/reservation/submit/schedule/schedule-edit";
import ScheduleSelect from "@/containers/customer/reservation/submit/schedule/schedule-select";
import Modal from "@/containers/ui/modal";
import { useSearchParams } from "next/navigation";

const VALID_INDEXES = {
  "0": 0,
  "1": 1,
  "2": 2,
};

const ScheduleModal = () => {
  const searchParams = useSearchParams();
  function parseIndex(index: string | null) {
    if (index !== null && index in VALID_INDEXES) {
      return VALID_INDEXES[index as keyof typeof VALID_INDEXES];
    }
    return null;
  }
  const index = parseIndex(searchParams.get("index"));

  return (
    <Modal>{index ? <ScheduleEdit index={index} /> : <ScheduleSelect />}</Modal>
  );
};

export default ScheduleModal;
