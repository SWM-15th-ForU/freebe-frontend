import Navbar from "@/containers/photographer/mypage/navbar";
import styles from "@/styles/page.module.css";

const MypageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100vw" }}>
      <Navbar />
      <div style={{ flex: 1, backgroundColor: "#F4F8FD" }}>{children}</div>
    </div>
  );
};

export default MypageLayout;
