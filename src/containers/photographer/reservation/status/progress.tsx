import { statusStyles } from "./status.css";

const Progress = ({ done }: { done: boolean }) => {
  return (
    <div className={done ? statusStyles.doneProgress : statusStyles.progress} />
  );
};

export default Progress;
