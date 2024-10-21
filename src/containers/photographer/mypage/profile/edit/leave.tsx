import { useDisclosure } from "@mantine/hooks";
import { leaveStyles } from "./edit.css";
import LeaveModal from "./leave-modal";

const Leave = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={leaveStyles.container}>
      <LeaveModal opened={opened} close={close} />
      <button onClick={open} className={leaveStyles.button} type="button">
        서비스 탈퇴하기
      </button>
    </div>
  );
};
export default Leave;
