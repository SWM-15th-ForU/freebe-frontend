import { useRouter } from "next/navigation";
import CloseButton from "@/components/buttons/close-button";
import submitStyles from "./submit.css";

const ScheduleLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  function handleClose() {
    router.back();
  }

  return (
    <div className={submitStyles.selectWrapper}>
      <CloseButton
        onClick={handleClose}
        size={18}
        container={{ position: "absolute", top: 0, right: 0, height: 29 }}
      />
      {children}
    </div>
  );
};

export default ScheduleLayout;
