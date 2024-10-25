import Link from "next/link";
import { SERVICE_LINKS } from "@/constants/common/common";
import { footerStyles } from "./customer.css";

const ServiceFooter = () => {
  return (
    <Link
      href={SERVICE_LINKS.landingPage}
      className={footerStyles.container}
      target="_blank"
    >
      <span className={footerStyles.text}>built using free:be</span>
    </Link>
  );
};

export default ServiceFooter;
