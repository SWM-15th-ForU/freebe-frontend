"use client";

import { useEffect, useState } from "react";
import { statusStyles } from "./status.css";

const Progress = ({ current }: { current: "DONE" | "NOW" | "NOT_STARTED" }) => {
  const [isNow, setIsNow] = useState(false);

  useEffect(() => {
    if (current === "NOW") {
      setIsNow(true);
    }
  }, [current]);

  return (
    <div
      className={
        current === "DONE" ? statusStyles.doneProgress : statusStyles.progress
      }
    >
      <div
        className={statusStyles.nowProgress}
        style={{ width: isNow ? "50%" : 0 }}
      />
    </div>
  );
};

export default Progress;
