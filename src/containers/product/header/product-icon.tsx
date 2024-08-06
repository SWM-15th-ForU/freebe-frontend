import Link from "next/link";
import { Icon } from "product-types";
import { iconStyle } from "../product.css";

const ProductIcon = ({
  id,
  image,
  title,
  selected,
  path,
}: Icon & { selected: boolean; path: string }) => {
  return (
    <Link href={`${path}/${id}`} style={{ width: "100%" }}>
      <div className={iconStyle.container}>
        <div
          className={iconStyle.image}
          style={{ backgroundColor: selected ? "#838383" : "#d9d9d9" }}
        />
        <p className={iconStyle.title}>{title}</p>
      </div>
    </Link>
  );
};

export default ProductIcon;
