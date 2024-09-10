import { layoutStyle } from "./customer.css";

const CustomerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={layoutStyle}>{children}</div>;
};

export default CustomerLayout;
