import Image from "next/image";
import { Popover } from "@mantine/core";
import { infoStyles } from "./common.css";

const AdditionInfo = ({ content, size }: { content: string; size: number }) => {
  return (
    <div className={infoStyles.container}>
      <Popover>
        <Popover.Target>
          <Image
            src="/icons/components/info.svg"
            width={size}
            height={size}
            alt="추가 정보"
          />
        </Popover.Target>
        <Popover.Dropdown className={infoStyles.dropdown}>
          <span>{content}</span>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default AdditionInfo;
