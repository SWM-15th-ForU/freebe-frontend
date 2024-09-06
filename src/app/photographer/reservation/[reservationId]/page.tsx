import ReservationDetails from "@/containers/photographer/reservation";
import { getReservationDetail } from "@/services/server/photographer/reservation";

const Page = async ({ params }: { params: { reservationId: number } }) => {
  const data = await getReservationDetail(params.reservationId);

  return <ReservationDetails detailsData={data} />;
};

export default Page;
