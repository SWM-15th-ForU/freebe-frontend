import { useState } from "react";
import Image from "next/image";
import { DropdownStyles } from "./common.css";

interface DropdownProps<T> {
  datas: T[];
  renderItem: (item: T) => JSX.Element;
  onClickItem: (index: number) => void;
}

const Dropdown = <T extends object>({
  datas,
  renderItem,
  onClickItem,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClickContainer() {
    setIsOpen((prev) => !prev);
  }

  function handleClickItem(index: number) {
    onClickItem(index);
    handleClickContainer();
  }

  return (
    <div className={DropdownStyles.area}>
      <div
        className={DropdownStyles.container}
        role="presentation"
        onClick={handleClickContainer}
      >
        <span className={DropdownStyles.placeholder}>추가 옵션</span>
        <Image src="/icons/down-skyblue.svg" width={16} height={8} alt="열기" />
      </div>
      {isOpen && (
        <div className={DropdownStyles.list}>
          {datas.map((data, index) => {
            return (
              <div
                className={DropdownStyles.listItems}
                key={index}
                onClick={() => handleClickItem(index)}
                role="presentation"
              >
                {renderItem(data)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
