import { IMAGE_STACK_SOURCES, SERVICE_LINKS } from "@/constants/common/common";
import Login from "@/containers/photographer/login";
import Header from "@/containers/photographer/main/header";
import { loginPageStyles } from "./login/page.css";

const Page = () => {
  return (
    <div className={loginPageStyles.layout}>
      <Header
        isOnboarding
        links={[
          { name: "서비스 안내", src: SERVICE_LINKS.landingPage },
          { name: "고객센터", src: SERVICE_LINKS.help },
        ]}
      />
      <div className={loginPageStyles.background}>
        <Login images={IMAGE_STACK_SOURCES} />
      </div>
    </div>
  );
};

export default Page;
