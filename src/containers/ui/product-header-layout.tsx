import ProductsHeader from "../customer/products/header";

const HEADER_HEIGHT = {
  progress: 64,
  default: 60,
};

interface HeaderLayoutProps {
  header: Parameters<typeof ProductsHeader>[0];
  children: React.ReactNode;
}

const ProductHeaderLayout = ({ header, children }: HeaderLayoutProps) => {
  return (
    <div>
      <ProductsHeader {...header} />
      <div
        style={{
          paddingTop: HEADER_HEIGHT[header.progress ? "progress" : "default"],
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ProductHeaderLayout;
