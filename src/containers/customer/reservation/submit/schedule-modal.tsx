import ScheduleEdit from "@/containers/customer/reservation/submit/schedule/schedule-edit";
import ScheduleSelect from "@/containers/customer/reservation/submit/schedule/schedule-select";
import CloseButton from "@/components/buttons/close-button";
import { Modal } from "@mantine/core";
import { modalStyles } from "../../products/products.css";
import submitStyles from "./submit.css";

const ScheduleModal = ({
  close,
  opened,
  targetIndex,
}: {
  opened: boolean;
  close: () => void;
  targetIndex?: number;
}) => {
  return (
    <Modal
      centered
      withCloseButton={false}
      opened={opened}
      onClose={close}
      classNames={{ ...modalStyles }}
    >
      <div className={submitStyles.selectWrapper}>
        <CloseButton
          onClick={close}
          size={18}
          container={{ position: "absolute", top: 0, right: 0, height: 29 }}
        />
        {targetIndex !== undefined ? (
          <ScheduleEdit index={targetIndex} />
        ) : (
          <ScheduleSelect close={close} />
        )}
      </div>
    </Modal>
  );
};

export default ScheduleModal;
