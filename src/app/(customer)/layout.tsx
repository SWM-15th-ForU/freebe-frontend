import { Metadata } from "next";
import { METADATA } from "@/constants/metadata";
import { contentStyle, layoutStyle } from "./customer.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${METADATA.customerTitle} | ${METADATA.sitename}`,
  };
}

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={layoutStyle}>
      <div className={contentStyle}>{children}</div>
    </div>
  );
};

export default MainLayout;
