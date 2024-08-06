import styles from "@/styles/page.module.css";
import Header from "@/containers/main/header";

const PhotographerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.center}>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default PhotographerLayout;
