import ProductList from "@/containers/product/product-list";
import { getProductList } from "@/services/server/photographer/mypage/products";

const MyProductPage = async () => {
  const productDatas = await getProductList();

  return (
    <div>
      <ProductList
        productDatas={productDatas.filter(
          (data) => data.activeStatus === "ACTIVE",
        )}
        status="ACTIVE"
      />
      <ProductList
        productDatas={productDatas.filter(
          (data) => data.activeStatus === "INACTIVE",
        )}
        status="INACTIVE"
      />
    </div>
  );
};

export default MyProductPage;
