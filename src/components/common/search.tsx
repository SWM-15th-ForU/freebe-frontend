import Image from "next/image";
import { CSSProperties, Dispatch, KeyboardEvent, SetStateAction } from "react";
import { searchStyles } from "./common.css";

interface SearchProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  container?: CSSProperties;
  onEnter?: () => void;
}

const Search = ({ value, setValue, container, onEnter }: SearchProps) => {
  function handleEnter(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && onEnter) {
      onEnter();
    }
  }

  return (
    <div className={searchStyles.container} style={{ ...container }}>
      <Image alt="검색" src="/icons/search.svg" height={20} width={20} />
      <input
        placeholder="검색"
        value={value}
        className={searchStyles.input}
        type="text"
        onKeyUp={handleEnter}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default Search;
