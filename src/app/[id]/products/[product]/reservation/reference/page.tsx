import { getImageList } from "@/services/customer/reservation";
import ReferenceForm from "@/containers/customer/reservation/reference-form";

const ReferencePage = async ({ params }: { params: { id: string } }) => {
  const result = await getImageList(params.id);

  return <ReferenceForm images={result} />;
};

export default ReferencePage;
