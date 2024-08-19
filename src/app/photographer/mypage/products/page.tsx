import ProductList from "@/containers/product/product-list";
import { listStyles } from "@/containers/product/product.css";
import { getProductList } from "@/services/server/photographer/mypage/products";

const MyProductPage = async () => {
  const productDatas = await getProductList();

  return (
    <div style={{ padding: 40 }}>
      <span className={listStyles.title}>내 상품 목록</span>
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
