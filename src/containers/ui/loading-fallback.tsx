import Image from "next/image";
import { handlerStyles } from "./ui.css";

export default function LoadingFallback() {
  return (
    <div className={handlerStyles.container}>
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
