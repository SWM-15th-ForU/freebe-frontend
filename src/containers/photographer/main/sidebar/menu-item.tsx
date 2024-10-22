import Image from "next/image";
import { DetailedHTMLProps, ButtonHTMLAttributes, CSSProperties } from "react";

interface ItemProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  name: string;
  icon?: string;
  container?: CSSProperties;
}

const MenuItem = ({ name, icon, container, ...props }: ItemProps) => {
  return (
    <div style={{ ...container, position: "relative", overflow: "visible" }}>
      <button type="button" {...props}>
        {icon && (
          <Image sizes="24px" alt="icon" src={icon} width={24} height={24} />
        )}
        <span>{name}</span>
      </button>
    </div>
  );
};

export default MenuItem;
