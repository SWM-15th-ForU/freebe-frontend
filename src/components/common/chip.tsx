import { CSSProperties } from "react";
import Image from "next/image";
import { chipStyles } from "./common.css";

interface ChipProps {
  icon?: string;
  name: string;
  styleType?: "normal" | "highlight";
  children?: React.ReactNode;
  onClick?: () => void;
  container?: CSSProperties;
}

const Chip = ({
  name,
  icon,
  children,
  onClick,
  container,
  styleType = "normal",
}: ChipProps) => {
  return (
    <button
      type="button"
      className={chipStyles[styleType]}
      onClick={onClick}
      style={{ ...container }}
    >
      {icon && <Image src={icon} alt={name} width={12} height={12} />}
      <span>{name}</span>
      {children}
    </button>
  );
};

export default Chip;
