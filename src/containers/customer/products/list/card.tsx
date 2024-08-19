"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProductListData } from "product-types";
import { cardStyles } from "./list.css";

const ProductCard = ({ id, representImage, title }: ProductListData) => {
  const currentPath = usePathname();

  return (
    <div className={cardStyles.container}>
      <Link href={`${currentPath}/${id}`} style={{ textDecoration: "none" }}>
        <div className={cardStyles.image}>
          <Image fill alt={`${id}`} src={representImage} />
        </div>
        <div className={cardStyles.wrapper}>
          <span className={cardStyles.title}>{title}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
