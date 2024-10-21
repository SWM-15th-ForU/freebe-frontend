import ServiceFooter from "@/containers/common/footer";
import Header from "@/containers/photographer/main/header";

const PhotographerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          paddingTop: 51,
        }}
      >
        <Header />
        {children}
      </div>
      <ServiceFooter />
    </div>
  );
};

export default PhotographerLayout;
