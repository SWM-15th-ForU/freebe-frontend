import { CustomerDetails } from "reservation-types";
import { infoStyles } from "./infos.css";

const RequestInfos = ({
  requestMemo,
}: Pick<CustomerDetails, "requestMemo">) => {
  return (
    <div className={infoStyles.container}>
      <span className={infoStyles.title}>요청 메모</span>
      <div className={infoStyles.wrapper}>
        <span className={infoStyles.article}>{requestMemo}</span>
      </div>
    </div>
  );
};

export default RequestInfos;
