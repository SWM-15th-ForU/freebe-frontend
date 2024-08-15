import ProductHeaderLayout from "@/containers/ui/product-header-layout";

const ProductViewPage = () => {
  return (
    <ProductHeaderLayout
      header={{ title: "상품 선택", progress: { total: 3, current: 1 } }}
    >
      <span>제목</span>
    </ProductHeaderLayout>
  );
};

export default ProductViewPage;
