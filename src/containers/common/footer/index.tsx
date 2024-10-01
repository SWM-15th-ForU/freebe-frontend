import Image from "next/image";
import Link from "next/link";
import { footerStyles } from "./footer.css";

const ServiceFooter = () => {
  const SERVICE_INFO = [
    { name: "이메일", content: "swm15foru@gmail.com" },
    { name: "전화번호", content: "070-8098-6471" },
    {
      name: "주소",
      content: "경기도 김포시 김포한강10로133번길 127, 530-AC03호",
    },
    {
      name: "사업자등록번호",
      content: "385-13-02383",
    },
  ];

  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.wrapper}>
        <div>
          <Image
            src="/icons/freebe-logo-white.svg"
            width={111}
            height={24}
            alt="free:be"
          />
          <div className={footerStyles.info}>
            {SERVICE_INFO.map((item) => {
              return (
                <div className={footerStyles.item} key={item.name}>
                  <span className={footerStyles.name}>{item.name}</span>
                  <span className={footerStyles.content}>{item.content}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={footerStyles.menuWrapper}>
          <div className={footerStyles.menu}>
            <span className={footerStyles.title}>이용안내</span>
            <span className={footerStyles.content}>공지사항</span>
          </div>
          <div className={footerStyles.menu}>
            <span className={footerStyles.title}>서비스 약관</span>
            <Link href="https://yul-lee.notion.site/10e9dfb7cdac80238163e5255ed16b9d">
              <span className={footerStyles.content}>서비스 이용약관</span>
            </Link>
            <Link href="https://freebe-official.notion.site/10e9dfb7cdac8099be8bc6b72c60483d">
              <span className={footerStyles.content}>개인정보처리방침</span>
            </Link>
          </div>
        </div>
      </div>
      <span className={footerStyles.caption}>
        프리비는 통신판매중개자로서 통신판매의 당사자가 아니며 각 상품의 주문,
        거래 및 환불 등에 관한 의무와 책임은 각 판매자에게 있습니다.
      </span>
    </div>
  );
};

export default ServiceFooter;