import { PRODUCT_PROGRESS } from "@/constants/customer/product";
import SubmitForm from "@/containers/customer/reservation/submit-form";
import ProductHeaderLayout from "@/containers/ui/product-header-layout";
import { getFormBase } from "@/services/server/customer/reservation";

const SubmitPage = async ({
  params,
}: {
  params: { product: string; id: number };
}) => {
  const result = await getFormBase(params.product);
  return (
    <ProductHeaderLayout
      header={{
        title: "신청서 작성",
        progress: {
          current: PRODUCT_PROGRESS.submit,
          total: PRODUCT_PROGRESS.total,
        },
      }}
    >
      <SubmitForm photographerId={params.id} {...result} />
    </ProductHeaderLayout>
  );
};

export default SubmitPage;
