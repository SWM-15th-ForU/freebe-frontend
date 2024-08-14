import SubmitForm from "@/containers/customer/reservation/submit-form";
import { getFormBase } from "@/services/customer/reservation";

const SubmitPage = async ({ params }: { params: { product: string } }) => {
  const result = await getFormBase(params.product);
  return <SubmitForm {...result} />;
};

export default SubmitPage;
