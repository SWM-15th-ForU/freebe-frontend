import ProductHeader from "@/containers/product/product-header";
import { Icon } from "product-types";

const ProductLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const products: Icon[] = [
    { image: "image", title: "상품a", id: "a" },
    { image: "image", title: "상품b", id: "b" },
    { image: "image", title: "상품c", id: "c" },
    { image: "image", title: "상품d", id: "d" },
    { image: "image", title: "상품e", id: "e" },
  ];

  return (
    <div style={{ width: "100vw", overflowX: "hidden" }}>
      <ProductHeader products={products} />
      {children}
    </div>
  );
};

export default ProductLayout;
