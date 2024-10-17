import { ProductListData } from "product-types";
import ProductCard from "./list/card";
import { listContainer } from "./products.css";

const ProductsList = ({ products }: { products: ProductListData[] }) => {
  return (
    <div className={listContainer}>
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductsList;
