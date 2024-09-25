import ServiceFooter from "@/containers/common/footer";
import { contentStyle, layoutStyle } from "./customer.css";

const CustomerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={layoutStyle}>
      <div className={contentStyle}>{children}</div>
      <ServiceFooter />
    </div>
  );
};

export default CustomerLayout;
