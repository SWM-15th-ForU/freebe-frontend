import Link from "next/link";
import Image from "next/image";
import { CustomerDetails } from "reservation-types";
import { infoStyles } from "./infos.css";

const Confirm = ({ totalPrice }: Pick<CustomerDetails, "totalPrice">) => {
  // TODO: 약관 페이지 링크 확인 필요

  return (
    <div className={infoStyles.container}>
      <span className={infoStyles.price}>총 {totalPrice}원</span>
      <div className={infoStyles.wrapper}>
        <Link href="/id/agreement">
          <div className={infoStyles.item}>
            <span className={infoStyles.name}>작가 약관 확인하기</span>
            <Image
              src="/icons/right.svg"
              alt="바로가기"
              height={18}
              width={18}
            />
          </div>
        </Link>
        <Link href="/article/agreement">
          <div className={infoStyles.item}>
            <span className={infoStyles.name}>서비스 약관 확인하기</span>
            <Image
              src="/icons/right.svg"
              alt="바로가기"
              height={18}
              width={18}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Confirm;
