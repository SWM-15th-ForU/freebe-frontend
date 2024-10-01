import { Status } from "reservation-types";
import { useParams } from "next/navigation";
import { PageParams } from "route-parameters";
import { statusTitles } from "@/constants/common/reservation";
import { Modal } from "@mantine/core";
import { CustomButton } from "@/components/buttons/common-buttons";
import { putReservationStatus } from "@/services/client/photographer/reservations";
import { modalStyles } from "@/containers/customer/products/products.css";
import { sectionStyles } from "../section.css";

const StatusModal = ({
  close,
  opened,
  targetStatus,
}: {
  opened: boolean;
  close: () => void;
  targetStatus: Status;
}) => {
  const { formId } = useParams<Pick<PageParams, "formId">>();

  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      classNames={{ ...modalStyles }}
    >
      <div className={sectionStyles.title}>
        신청서를 &apos;{statusTitles[targetStatus]}&apos; 상태로 변경하시겠어요?
      </div>
      <CustomButton
        size="sm"
        styleType="primary"
        title="변경하기"
        onClick={() => putReservationStatus(parseInt(formId, 10), targetStatus)}
      />
    </Modal>
  );
};

export default StatusModal;
