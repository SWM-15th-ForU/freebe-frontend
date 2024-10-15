import { CustomerDetails } from "reservation-types";
import { detailStyles } from "./detail.css";
import ProductInfos from "./infos/product";
import OptionInfos from "./infos/option";
import RequestInfos from "./infos/request";
import Confirm from "./infos/confirm";
import ShootingInfos from "./infos/shooting";

const Info = ({
  basicPrice,
  basicPlace,
  shootingDate,
  options,
  preferredDates,
  productInfo,
  requestMemo,
  totalPrice,
  preferredPlace,
  shootingPlace,
}: Omit<CustomerDetails, "currentStatus" | "productTitle">) => {
  return (
    <div className={detailStyles.body}>
      <ProductInfos basicPlace={basicPlace} productInfo={productInfo} />
      <RequestInfos
        requestMemo={requestMemo}
        preferredDates={preferredDates}
        preferredPlace={preferredPlace}
      />
      <ShootingInfos
        shootingDate={shootingDate}
        shootingPlace={shootingPlace}
      />
      <OptionInfos options={options} basicPrice={basicPrice} />
      <Confirm totalPrice={totalPrice} />
    </div>
  );
};

export default Info;
