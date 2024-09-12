import ReservationDetails from "@/containers/customer/reservation/reservation-details";
import ProductHeaderLayout from "@/containers/ui/product-header-layout";
import { getReservationDetails } from "@/services/server/customer/reservation";

const CustomerReservationPage = async ({
  params,
}: {
  params: { reservationId: number };
}) => {
  const details = await getReservationDetails(params.reservationId);
  return (
    <ProductHeaderLayout header={{ title: "신청서 확인" }}>
      <ReservationDetails details={details} />
    </ProductHeaderLayout>
  );
};

export default CustomerReservationPage;
