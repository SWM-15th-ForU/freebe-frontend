import ReservationDetails from "@/containers/photographer/reservation";
import { getReservationDetail } from "@/services/server/photographer/reservation";
import { PageParams } from "route-parameters";

const Page = async ({ params }: { params: Pick<PageParams, "formId"> }) => {
  const data = await getReservationDetail(params.formId);

  return <ReservationDetails detailsData={data} />;
};

export default Page;
