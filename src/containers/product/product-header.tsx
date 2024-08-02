"use client";

import { usePathname } from "next/navigation";
import { Icon } from "product-types";
import ProductIcon from "./header/product-icon";
import { headerStyle } from "./product.css";

const ProductHeader = ({ products }: { products: Icon[] }) => {
  const currentId = usePathname().split("/").pop();

  return (
    <div className={headerStyle.container}>
      {products.map((product, index) => {
        return (
          <ProductIcon
            key={index}
            selected={product.id === currentId}
            {...product}
          />
        );
      })}
    </div>
  );
};

export default ProductHeader;
