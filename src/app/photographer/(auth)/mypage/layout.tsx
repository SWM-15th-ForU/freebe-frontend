import Navbar from "@/containers/photographer/mypage/navbar";
import styles from "@/styles/page.module.css";
import { mypageStyles } from "./mypage.css";

const MypageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={mypageStyles.container}>
      <div className={mypageStyles.body}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default MypageLayout;
