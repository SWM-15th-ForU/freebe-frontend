import styles from "@/styles/page.module.css";
import Header from "@/containers/photographer/main/header";

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
      <div>{children}</div>
    </div>
  );
};

export default PhotographerLayout;
