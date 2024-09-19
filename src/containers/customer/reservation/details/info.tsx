import { CustomerDetails } from "reservation-types";
import { detailStyles } from "./detail.css";
import ProductInfos from "./infos/product";
import OptionInfos from "./infos/option";
import ScheduleInfos from "./infos/schedule";
import RequestInfos from "./infos/request";
import Confirm from "./infos/confirm";

const Info = ({
  options,
  preferredDates,
  productInfo,
  requestMemo,
  totalPrice,
}: Omit<CustomerDetails, "currentStatus" | "productTitle">) => {
  return (
    <div className={detailStyles.body}>
      <ProductInfos productInfo={productInfo} />
      <ScheduleInfos preferredDates={preferredDates} />
      <OptionInfos options={options} />
      <RequestInfos requestMemo={requestMemo} />
      <Confirm totalPrice={totalPrice} />
    </div>
  );
};

export default Info;
