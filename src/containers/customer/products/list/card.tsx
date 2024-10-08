"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProductListData } from "product-types";
import { formatPrice } from "@/utils/parse";
import { cardStyles } from "./list.css";

const ProductCard = ({
  id,
  representImage,
  title,
  basicPrice,
}: ProductListData) => {
  const currentPath = usePathname();

  return (
    <div className={cardStyles.container}>
      <Link href={`${currentPath}/${id}`} style={{ textDecoration: "none" }}>
        <div className={cardStyles.image}>
          <Image
            fill
            alt={`${id}`}
            src={representImage}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={cardStyles.wrapper}>
          <span className={cardStyles.title}>{title}</span>
          <span className={cardStyles.price}>{formatPrice(basicPrice)}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
