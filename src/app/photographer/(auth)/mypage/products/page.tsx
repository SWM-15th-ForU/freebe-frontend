import ProductList from "@/containers/photographer/product/product-list";
import MypageLayout from "@/containers/ui/mypage-layout";
import { getProductList } from "@/services/server/photographer/mypage/products";

const MyProductPage = async () => {
  const productDatas = await getProductList();

  return (
    <MypageLayout title="내 상품 목록">
      <ProductList productDatas={productDatas} status="ACTIVE" />
      <ProductList productDatas={productDatas} status="INACTIVE" />
    </MypageLayout>
  );
};

export default MyProductPage;
