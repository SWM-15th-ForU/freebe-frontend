import { useState } from "react";
import Image from "next/image";
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
      <div className={bottomSheetStyles.header}>
        <button
          type="button"
          className={bottomSheetStyles.control}
          onClick={handleSheetControl}
        >
          <Image
            src="/icons/right.svg"
            alt="메뉴"
            width={16}
            height={16}
            className={
              isFull ? bottomSheetStyles.closeIcon : bottomSheetStyles.openIcon
            }
          />
        </button>
      </div>
      <div className={bottomSheetStyles.body}>{children}</div>
    </div>
  );
};
export default BottomSheet;
