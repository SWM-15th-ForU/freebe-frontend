import Header from "@/containers/main/header";

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
