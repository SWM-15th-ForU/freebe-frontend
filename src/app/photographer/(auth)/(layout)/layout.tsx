import PhotographerSidebar from "@/containers/photographer/main/sidebar";
import { photographerStyles } from "../photographer.css";

const SidebarLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={photographerStyles.body}>
      <PhotographerSidebar />
      <div className={photographerStyles.content}>{children}</div>
    </div>
  );
};

export default SidebarLayout;
