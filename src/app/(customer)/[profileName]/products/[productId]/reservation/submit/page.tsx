import { PRODUCT_PROGRESS } from "@/constants/customer/product";
import SubmitForm from "@/containers/customer/reservation/submit-form";
import ProductHeaderLayout from "@/containers/ui/product-header-layout";
import { getFormBase } from "@/services/server/customer/reservation";
import { PageParams } from "route-parameters";

const SubmitPage = async ({
  params,
}: {
  params: Pick<PageParams, "profileName" | "productId">;
}) => {
  const result = await getFormBase(params.profileName);
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
      <SubmitForm profileName={params.profileName} {...result} />
    </ProductHeaderLayout>
  );
};

export default SubmitPage;
