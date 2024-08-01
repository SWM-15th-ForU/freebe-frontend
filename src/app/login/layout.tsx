import styles from "@/styles/page.module.css";

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.center}>
      <div>{children}</div>
    </div>
  );
};

export default LoginLayout;
