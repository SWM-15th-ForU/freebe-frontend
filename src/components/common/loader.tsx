import Image from "next/image";
import { loaderStyle } from "./common.css";

const Loader = () => {
  return (
    <Image
      src="/icons/loading.svg"
      width={30}
      height={30}
      alt="now loading"
      className={loaderStyle}
    />
  );
};

export default Loader;
