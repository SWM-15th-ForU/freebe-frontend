import ServiceFooter from "@/containers/common/footer";
import Header from "@/containers/photographer/main/header";
import { SERVICE_LINKS } from "@/constants/common/common";
import { loginPageStyles } from "./page.css";

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className={loginPageStyles.layout}>
        <Header
          isOnboarding
          links={[
            { name: "서비스 안내", src: SERVICE_LINKS.landingPage },
            { name: "고객센터", src: SERVICE_LINKS.help },
          ]}
        />
        {children}
      </div>
      <ServiceFooter />
    </div>
  );
};

export default LoginLayout;
