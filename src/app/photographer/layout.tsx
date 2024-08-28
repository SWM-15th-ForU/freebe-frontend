import styles from "@/styles/page.module.css";
import Header from "@/containers/main/header";

const PhotographerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={styles.center}
      style={{ minWidth: "900px", width: "100vw", overflowX: "scroll" }}
    >
      <Header />
      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
};

export default PhotographerLayout;
