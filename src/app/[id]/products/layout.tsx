import ProductHeader from "@/containers/product/product-header";
import { ProductIcon } from "product-types";

const ProductLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const products: ProductIcon[] = [
    { image: "image", title: "상품명", id: "a" },
    { image: "image", title: "상품명", id: "b" },
    { image: "image", title: "상품명", id: "c" },
  ];

  return (
    <div>
      <ProductHeader products={products} />
      {children}
    </div>
  );
};

export default ProductLayout;
