import ServiceFooter from "@/components/customer/service-footer";
import { LinkButton } from "@/components/buttons/common-buttons";
import { Link } from "profile-types";
import { buttonsWrapper, sheetContainer } from "./main.css";

interface InfoSheetProps {
  id: string;
  message: string;
  links: Link[];
}

const InfoSheet = ({ id, links, message }: InfoSheetProps) => {
  return (
    <div className={sheetContainer}>
      <p>{message}</p>
      <div className={buttonsWrapper}>
        {links.map((link) => {
          return <LinkButton key={link.name} {...link} />;
        })}
      </div>
      <ServiceFooter />
    </div>
  );
};

export default InfoSheet;
