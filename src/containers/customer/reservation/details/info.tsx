import { CustomerDetails } from "reservation-types";
import { detailStyles } from "./detail.css";
import ProductInfos from "./infos/product";
import OptionInfos from "./infos/option";
import ScheduleInfos from "./infos/schedule";
import RequestInfos from "./infos/request";
import Confirm from "./infos/confirm";

const Info = ({
  basicPrice,
  shootingDate,
  options,
  preferredDates,
  productInfo,
  requestMemo,
  totalPrice,
  profileName,
}: Omit<CustomerDetails, "currentStatus" | "productTitle">) => {
  return (
    <div className={detailStyles.body}>
      <ProductInfos productInfo={productInfo} />
      <ScheduleInfos
        preferredDates={preferredDates}
        shootingDate={shootingDate}
      />
      <RequestInfos requestMemo={requestMemo} />
      <OptionInfos options={options} basicPrice={basicPrice} />
      <Confirm totalPrice={totalPrice} profileName={profileName} />
    </div>
  );
};

export default Info;
