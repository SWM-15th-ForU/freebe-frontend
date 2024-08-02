import ProductHeader from "@/containers/product/product-header";
import { Icon } from "product-types";

const ProductLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const products: Icon[] = [
    { image: "image", title: "상품명", id: "a" },
    { image: "image", title: "상품명", id: "b" },
    { image: "image", title: "상품명", id: "c" },
    { image: "image", title: "상품명", id: "c" },
    { image: "image", title: "상품명", id: "c" },
    { image: "image", title: "상품명", id: "c" },
    { image: "image", title: "상품명", id: "c" },
  ];

  return (
    <div style={{ width: "100vw" }}>
      <ProductHeader products={products} />
      {children}
    </div>
  );
};

export default ProductLayout;
