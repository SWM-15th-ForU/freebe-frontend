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
          width: "100vw",
          minHeight: "100vh",
          paddingTop: 51,
        }}
      >
        <Header isOnboarding />
        {children}
      </div>
      <ServiceFooter />
    </div>
  );
};

export default PhotographerLayout;
