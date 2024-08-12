import { useState } from "react";
import Image from "next/image";
import { DropdownStyles } from "./common.css";

type BaseValueType = {
  value: string;
};

interface DropdownProps<T> {
  datas: T[];
}

const Dropdown = <T extends BaseValueType>({ datas }: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={DropdownStyles.container}>
      <span className={DropdownStyles.placeholder}>추가 옵션</span>
      <Image src="/icons/down-skyblue.svg" width={16} height={8} alt="열기" />
      {isOpen && (
        <div>
          {datas.map((data, index) => {
            return <div key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
