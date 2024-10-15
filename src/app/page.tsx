import { IMAGE_STACK_SOURCES } from "@/constants/common/common";
import Login from "@/containers/photographer/login";
import Header from "@/containers/photographer/main/header";
import { loginPageStyles } from "./login/page.css";

const Page = () => {
  return (
    <div className={loginPageStyles.layout}>
      <Header
        isOnboarding
        link={{ name: "서비스 안내", src: "https://freebe.softr.app/" }}
      />

      <div className={loginPageStyles.background}>
        <Login images={IMAGE_STACK_SOURCES} />
      </div>
    </div>
  );
};

export default Page;
