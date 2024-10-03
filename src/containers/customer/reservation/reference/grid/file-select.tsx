import { useRef } from "react";
import Image from "next/image";
import { fileSelectStyles } from "./grid.css";

const FileSelect = ({
  handleAdd,
}: {
  handleAdd: (url: string, file?: File) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUserImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      handleAdd(url, file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div className={fileSelectStyles.container}>
      <Image src="/icons/plus.svg" width={16} height={16} alt="파일 추가하기" />
      <span className={fileSelectStyles.info}>파일 추가하기</span>
      <input
        type="file"
        onChange={handleUserImageUpload}
        ref={fileInputRef}
        className={fileSelectStyles.input}
      />
    </div>
  );
};

export default FileSelect;
