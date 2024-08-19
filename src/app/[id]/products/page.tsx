import ProductsList from "@/containers/customer/products/list";
import ProductHeaderLayout from "@/containers/ui/product-header-layout";
import { getProductList } from "@/services/server/customer/product";

const ProductViewPage = async ({ params }: { params: { id: number } }) => {
  const productList = await getProductList(params.id);

  return (
    <ProductHeaderLayout
      header={{ title: "상품 선택", progress: { total: 3, current: 1 } }}
    >
      <ProductsList products={productList} />
    </ProductHeaderLayout>
  );
};

export default ProductViewPage;
