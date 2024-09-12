import Header from "@/containers/photographer/main/header";

const PhotographerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        paddingTop: 51,
      }}
    >
      <Header />
      {children}
    </div>
  );
};

export default PhotographerLayout;
