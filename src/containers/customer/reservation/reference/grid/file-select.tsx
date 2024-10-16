import { useRef } from "react";
import { ACCEPTED_IMAGE } from "@/constants/common/common";
import popToast from "@/components/common/toast";
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
      if (file.size > ACCEPTED_IMAGE.size) {
        popToast(
          "10MB 이하의 이미지를 등록해주세요.",
          "이미지의 크기가 너무 큽니다.",
        );
      } else {
        const url = URL.createObjectURL(file);
        handleAdd(url, file);
      }
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div className={fileSelectStyles.container}>
      <span className={fileSelectStyles.info}>내 갤러리에서 가져오기</span>
      <input
        type="file"
        accept={ACCEPTED_IMAGE.file}
        onChange={handleUserImageUpload}
        ref={fileInputRef}
        className={fileSelectStyles.input}
      />
    </div>
  );
};

export default FileSelect;
