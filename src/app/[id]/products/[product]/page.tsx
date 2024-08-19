import { getProductDetails } from "@/services/server/customer/product";
import ProductHeaderLayout from "@/containers/ui/product-header-layout";
import ProductInfo from "@/containers/customer/products/info";
import { PRODUCT_PROGRESS } from "@/constants/customer/product";

const ProductPage = async ({ params }: { params: { product: number } }) => {
  const productDetails = await getProductDetails(params.product);

  return (
    <ProductHeaderLayout
      header={{
        title: "상품 조회",
        progress: {
          total: PRODUCT_PROGRESS.total,
          current: PRODUCT_PROGRESS.info,
        },
      }}
    >
      <ProductInfo {...productDetails} />
    </ProductHeaderLayout>
  );
};

export default ProductPage;
