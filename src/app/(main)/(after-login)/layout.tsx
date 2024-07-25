import Header from "@/containers/main/header/header";

const MainAfterLoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainAfterLoginLayout;
