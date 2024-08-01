import ServiceFooter from "@/components/customer/service-footer";
import { sheetContainer } from "./main.css";

interface InfoSheetProps {
  id: string;
  message: string;
  links: string[];
}

const InfoSheet = ({ id, links, message }: InfoSheetProps) => {
  return (
    <div className={sheetContainer}>
      <p>{message}</p>
      <ServiceFooter />
    </div>
  );
};

export default InfoSheet;
