import Image from "next/image";
import { chipStyles } from "./common.css";

interface ChipProps {
  icon: string;
  name: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Chip = ({ name, icon, children, onClick }: ChipProps) => {
  return (
    <button type="button" className={chipStyles.container} onClick={onClick}>
      <Image src={icon} alt={name} width={12} height={12} />
      <span>{name}</span>
      {children}
    </button>
  );
};

export default Chip;
