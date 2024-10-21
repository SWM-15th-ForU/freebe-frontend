import ProductsList from "@/containers/customer/products/list";
import ProductHeaderLayout from "@/containers/ui/product-header-layout";
import { getProductList } from "@/services/server/customer/product";
import { PageParams } from "route-parameters";

const ProductViewPage = async ({
  params,
}: {
  params: Pick<PageParams, "profileName">;
}) => {
  const productList = await getProductList(params.profileName);

  return (
    <ProductHeaderLayout
      header={{ title: "상품 선택", progress: { total: 3, current: 1 } }}
    >
      <ProductsList products={productList} />
    </ProductHeaderLayout>
  );
};

export default ProductViewPage;
