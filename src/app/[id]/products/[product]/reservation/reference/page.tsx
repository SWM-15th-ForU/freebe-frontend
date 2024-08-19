import { getImageList } from "@/services/server/customer/reservation";
import ReferenceForm from "@/containers/customer/reservation/reference-form";
import ProductHeaderLayout from "@/containers/ui/product-header-layout";
import { PRODUCT_PROGRESS } from "@/constants/customer/product";

const ReferencePage = async ({ params }: { params: { id: string } }) => {
  const result = await getImageList(params.id);

  return (
    <ProductHeaderLayout
      header={{
        title: "원하는 분위기의 사진을 골라 보세요.",
        progress: {
          current: PRODUCT_PROGRESS.reference,
          total: PRODUCT_PROGRESS.total,
        },
      }}
    >
      <ReferenceForm images={result} />
    </ProductHeaderLayout>
  );
};

export default ReferencePage;
