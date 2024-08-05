"use client";

import { usePathname } from "next/navigation";
import { Icon } from "product-types";
import ProductIcon from "./header/product-icon";
import { headerStyle } from "./product.css";

const INDEX_OF_PRODUCT = 3;

const ProductHeader = ({ products }: { products: Icon[] }) => {
  const currentPath = usePathname().split("/");
  const currentProduct = currentPath.at(INDEX_OF_PRODUCT);

  function getBasePath(params: string[]) {
    return params.slice(0, INDEX_OF_PRODUCT).join("/");
  }

  return (
    <div className={headerStyle.container}>
      {products.map((product, index) => {
        return (
          <ProductIcon
            key={index}
            selected={product.id === currentProduct}
            path={getBasePath(currentPath)}
            {...product}
          />
        );
      })}
    </div>
  );
};

export default ProductHeader;
