import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { searchStyles } from "./common.css";

interface SearchProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Search = ({ value, setValue }: SearchProps) => {
  return (
    <div className={searchStyles.container}>
      <Image alt="검색" src="/icons/search.svg" height={20} width={20} />
      <input
        placeholder="검색"
        value={value}
        className={searchStyles.input}
        type="text"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default Search;
