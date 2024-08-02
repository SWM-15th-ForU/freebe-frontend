import Link from "next/link";
import { Icon } from "product-types";
import { iconStyle } from "../product.css";

const ProductIcon = ({
  id,
  image,
  title,
  selected,
}: Icon & { selected: boolean }) => {
  return (
    <Link href={`${id}`} style={{ width: "100%" }}>
      <div className={iconStyle.container}>
        <div
          className={iconStyle.image}
          style={{ borderWidth: selected ? 2 : 0, borderColor: "black" }}
        />
        <p className={iconStyle.title}>{title}</p>
      </div>
    </Link>
  );
};

export default ProductIcon;
