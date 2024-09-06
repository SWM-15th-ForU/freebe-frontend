import TextInput from "@/components/inputs/text-input";
import { Details } from "reservation-types";
import { sectionStyles } from "./section.css";

const RequestDetails = () => {
  return (
    <div style={{ padding: "40px 0px" }}>
      <span className={sectionStyles.title}>요청 메모</span>
      <TextInput<Details> disabled formField="requestMemo" />
    </div>
  );
};

export default RequestDetails;
