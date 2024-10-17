import { Metadata } from "next";
import ServiceFooter from "@/containers/common/footer";
import { METADATA } from "@/constants/metadata";
import { contentStyle, layoutStyle } from "../customer.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${METADATA.customerTitle} | ${METADATA.sitename}`,
  };
}

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
