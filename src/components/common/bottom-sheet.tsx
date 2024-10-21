import { useState } from "react";
import { bottomSheetStyles } from "./common.css";

const BottomSheet = ({ children }: { children: React.ReactNode }) => {
  const [isFull, setIsFull] = useState(false);

  function handleSheetControl() {
    setIsFull((prev) => !prev);
  }

  return (
    <div
      className={bottomSheetStyles.container}
      style={
        isFull
          ? {
              flex: "0 0 100%",
              position: "absolute",
              height: "90%",
            }
          : {
              flex: "1",
              position: "relative",
              height: "0",
            }
      }
    >
      <div
        role="presentation"
        className={bottomSheetStyles.header}
        onTouchEnd={handleSheetControl}
        onClick={handleSheetControl}
      >
        <div className={bottomSheetStyles.handle} />
      </div>
      <div className={bottomSheetStyles.body}>{children}</div>
    </div>
  );
};
export default BottomSheet;
