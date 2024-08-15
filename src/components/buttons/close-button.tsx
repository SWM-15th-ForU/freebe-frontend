import { CSSProperties } from "react";
import Image from "next/image";
import { closeStyles } from "./buttons.css";

interface CloseButtonProps {
  onClick: () => void;
  size: number;
  styleType?: "shadow" | "normal";
  color?: "grey" | "white";
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
    <div
      className={closeStyles.container}
      style={container}
      onClick={onClick}
      role="presentation"
    >
      <Image
        src={styles[styleType].src}
        width={size}
        height={size}
        alt="close"
        className={closeStyles[color]}
      />
    </div>
  );
};

export default CloseButton;
