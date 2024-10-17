import Image from "next/image";
import { cardStyles } from "./list.css";

const CardContent = ({
  icon,
  name,
  id,
}: {
  icon: string;
  name: string;
  id: string;
}) => {
  return (
    <div className={cardStyles.content}>
      <Image src={icon} width={12} height={12} alt={id} />
      <span>{name}</span>
    </div>
  );
};

export default CardContent;
