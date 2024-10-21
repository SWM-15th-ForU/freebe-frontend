import { CSSProperties, useState } from "react";
import Image from "next/image";
import { DropdownStyles } from "./common.css";

interface DropdownProps<T> {
  datas: T[];
  renderItem: (item: T) => JSX.Element;
  onClickItem: (index: number) => void;
  placeholder: string;
  container?: CSSProperties;
}

const Dropdown = <T extends object>({
  datas,
  renderItem,
  onClickItem,
  placeholder,
  container,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClickContainer() {
    if (datas.length !== 0) {
      setIsOpen((prev) => !prev);
    }
  }

  function handleClickItem(index: number) {
    onClickItem(index);
    handleClickContainer();
  }

  return (
    <div className={DropdownStyles.area}>
      <div
        className={
          datas.length === 0
            ? DropdownStyles.disableContainer
            : DropdownStyles.container
        }
        role="presentation"
        onClick={handleClickContainer}
        style={{ ...container }}
      >
        <span
          className={
            datas.length === 0
              ? DropdownStyles.disablePlaceholder
              : DropdownStyles.placeholder
          }
        >
          {placeholder}
        </span>
        <Image src="/icons/down-skyblue.svg" width={16} height={8} alt="열기" />
      </div>
      {isOpen && (
        <div className={DropdownStyles.list}>
          {datas.map((data, index) => {
            return (
              <div
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
