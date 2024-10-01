import ReservationDetails from "@/containers/customer/reservation/reservation-details";
import ProductHeaderLayout from "@/containers/ui/product-header-layout";
import { getReservationDetails } from "@/services/server/customer/reservation";
import { PageParams } from "route-parameters";

const CustomerReservationPage = async ({
  params,
}: {
  params: Pick<PageParams, "formId">;
}) => {
  const details = await getReservationDetails(params.formId);
  return (
    <ProductHeaderLayout header={{ title: "신청서 확인" }}>
      <ReservationDetails details={details} />
    </ProductHeaderLayout>
  );
};

export default CustomerReservationPage;
