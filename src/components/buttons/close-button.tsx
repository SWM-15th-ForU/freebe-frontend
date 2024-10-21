import { CSSProperties } from "react";
import Image from "next/image";
import { closeStyles } from "./buttons.css";

interface CloseButtonProps {
  onClick: () => void;
  size: number;
  styleType?: "shadow" | "normal";
  color?: "grey" | "white" | "background";
  container?: CSSProperties;
}

const CloseButton = ({
  onClick,
  styleType = "normal",
  color = "grey",
  container,
  size,
}: CloseButtonProps) => {
  const styles = {
    shadow: { src: "/icons/close-shadow.svg" },
    normal: { src: "/icons/close.svg" },
  };

  return (
    <div className={closeStyles.container} style={container}>
      <div
        className={closeStyles[color]}
        style={{ width: size, aspectRatio: 1, position: "relative" }}
        onClick={(e) => {
          onClick();
          e.stopPropagation();
        }}
        role="presentation"
      >
        <Image src={styles[styleType].src} fill alt="close" />
      </div>
    </div>
  );
};

export default CloseButton;
