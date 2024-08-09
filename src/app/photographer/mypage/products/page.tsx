import ProductList from "@/containers/product/product-list";
import { getProductList } from "@/utils/apis/photographer/mypage";

const MyProductPage = async () => {
  const productDatas = await getProductList();

  return (
    <div>
      <ProductList
        productDatas={productDatas.filter((data) => data.isOpen)}
        status="ACTIVE"
      />
      <ProductList
        productDatas={productDatas.filter((data) => !data.isOpen)}
        status="INACTIVE"
      />
    </div>
  );
};

export default MyProductPage;
