import { CSSProperties } from "react";
import Image from "next/image";
import { captionStyle } from "./common.css";

const InfoCaption = ({
  information,
  container,
}: {
  information: string;
  container?: CSSProperties;
}) => {
  return (
    <div className={captionStyle} style={{ ...container }}>
      <Image src="/icons/error.svg" alt="확인" height={20} width={12} />
      <span>{information}</span>
    </div>
  );
};

export default InfoCaption;
