import Login from "@/containers/photographer/login";
import Header from "@/containers/photographer/main/header";
import { loginPageStyles } from "./login/page.css";

const Page = () => {
  // TODO: 실제 사진 반환받아 데이터 연결
  const images = [
    "https://picsum.photos/800/800",
    "https://picsum.photos/800/1000",
    "https://picsum.photos/800/900",
  ];

  return (
    <div className={loginPageStyles.layout}>
      <Header
        isOnboarding
        link={{ name: "서비스 안내", src: "https://freebe.softr.app/" }}
      />

      <div className={loginPageStyles.background}>
        <Login images={images} />
      </div>
    </div>
  );
};

export default Page;
