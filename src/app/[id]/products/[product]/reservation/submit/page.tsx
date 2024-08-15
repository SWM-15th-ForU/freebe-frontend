import SubmitForm from "@/containers/customer/reservation/submit-form";
import { getFormBase } from "@/services/server/customer/reservation";

const SubmitPage = async ({
  params,
}: {
  params: { product: string; id: number };
}) => {
  const result = await getFormBase(params.product);
  return <SubmitForm photographerId={params.id} {...result} />;
};

export default SubmitPage;
