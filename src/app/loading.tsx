import Image from "next/image";
import { handlerStyles } from "./root.css";

export default function Loading() {
  return (
    <div className={handlerStyles.fullContainer}>
      <Image
        src="/images/loading.png"
        width={30}
        height={30}
        alt="now loading"
        className={handlerStyles.loader}
      />
      <span className={handlerStyles.message}>로딩 중입니다...</span>
    </div>
  );
}
