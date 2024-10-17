import { BottomButton } from "@/components/buttons/common-buttons";
import ProductsHeader from "../customer/products/header";
import { headerLayoutStyles } from "./ui.css";

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
    <div className={headerLayoutStyles.container}>
      <ProductsHeader {...header} />
      <div className={headerLayoutStyles.content}>{children}</div>
    </div>
  );
};

export default ProductHeaderLayout;
