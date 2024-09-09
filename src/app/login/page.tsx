import Login from "@/containers/photographer/login";
import { loginPageStyles } from "./page.css";

const Page = () => {
  // TODO: 실제 사진 반환받아 데이터 연결
  const images = [
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/400",
  ];

  return (
    <div className={loginPageStyles.background}>
      <Login images={images} />
    </div>
  );
};

export default Page;
