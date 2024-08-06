import Navbar from "@/containers/mypage/navbar";
import styles from "@/styles/page.module.css";

const MypageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={styles.center}
      style={{ display: "flex", flexDirection: "row" }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};

export default MypageLayout;
