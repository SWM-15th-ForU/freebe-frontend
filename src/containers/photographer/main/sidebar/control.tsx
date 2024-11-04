import Image from "next/image";
import { menuStyles } from "./sidebar.css";

const ControlSidebar = ({
  onClick,
  opened,
}: {
  onClick: () => void;
  opened: boolean;
}) => {
  return (
    <button type="button" className={menuStyles.control} onClick={onClick}>
      <Image
        src="/icons/right.svg"
        alt="메뉴"
        width={16}
        height={16}
        className={opened ? menuStyles.closeIcon : menuStyles.openIcon}
      />
    </button>
  );
};

export default ControlSidebar;
