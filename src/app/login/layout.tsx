import ServiceFooter from "@/containers/common/footer";
import Header from "@/containers/photographer/main/header";
import { loginPageStyles } from "./page.css";

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className={loginPageStyles.layout}>
        <Header />
        {children}
      </div>
      <ServiceFooter />
    </div>
  );
};

export default LoginLayout;
