"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProgressType } from "common-types";
import { headerStyles } from "./products.css";

interface ProductHeaderProps {
  title: string;
  progress?: ProgressType;
  hasBackbutton?: boolean;
}

const ProductsHeader = ({
  title,
  progress,
  hasBackbutton = true,
}: ProductHeaderProps) => {
  const router = useRouter();

  function handlePressBack() {
    router.back();
  }

  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.wrapper}>
        {hasBackbutton && (
          <div
            className={headerStyles.button}
            role="presentation"
            onClick={handlePressBack}
          >
            <Image
              src="/icons/previous.svg"
              width={24}
              height={24}
              alt="이전"
            />
          </div>
        )}
        <span className={headerStyles.title}>{title}</span>
      </div>
      {progress && (
        <div className={headerStyles.progressContainer}>
          <div
            className={headerStyles.progressBar}
            style={{ width: `${(progress.current / progress.total) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsHeader;
