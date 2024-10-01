import Login from "@/containers/photographer/login";
import { loginPageStyles } from "./page.css";

const Page = () => {
  // TODO: 실제 사진 반환받아 데이터 연결
  const images = [
    "https://picsum.photos/800/800",
    "https://picsum.photos/800/1000",
    "https://picsum.photos/800/900",
  ];

  return (
    <div className={loginPageStyles.background}>
      <Login images={images} />
    </div>
  );
};

export default Page;
