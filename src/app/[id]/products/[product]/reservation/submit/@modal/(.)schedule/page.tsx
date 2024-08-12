"use client";

import ScheduleSelect from "@/containers/customer/reservation/submit/schedule-select";
import Modal from "@/containers/ui/modal";

const ScheduleModal = () => {
  return (
    <Modal>
      <ScheduleSelect />
    </Modal>
  );
};

export default ScheduleModal;
