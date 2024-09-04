import Header from "@/containers/main/header";

const PhotographerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      style={{
        width: "100vw",
        overflowX: "scroll",
        paddingTop: 51,
      }}
    >
      <Header />
      {children}
    </div>
  );
};

export default PhotographerLayout;
