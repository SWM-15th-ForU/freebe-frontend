import { Icon } from "product-types";

const ProductLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div style={{ width: "100vw", overflowX: "hidden" }}>{children}</div>;
};

export default ProductLayout;
