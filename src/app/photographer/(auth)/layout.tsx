import { SERVICE_LINKS } from "@/constants/common/common";
import ServiceFooter from "@/containers/common/footer";
import Header from "@/containers/photographer/main/header";
import PhotographerSidebar from "@/containers/photographer/main/sidebar";
import { photographerStyles } from "./photographer.css";

const PhotographerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className={photographerStyles.headerLayout}>
        <Header
          links={[
            { name: "서비스 안내", src: SERVICE_LINKS.landingPage },
            { name: "고객센터", src: SERVICE_LINKS.help },
          ]}
        />
        <div className={photographerStyles.body}>
          <PhotographerSidebar />
          <div className={photographerStyles.content}>{children}</div>
        </div>
      </div>
      <ServiceFooter />
    </div>
  );
};

export default PhotographerLayout;
