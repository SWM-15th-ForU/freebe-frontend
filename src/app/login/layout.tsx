import ServiceFooter from "@/containers/common/footer";
import Header from "@/containers/photographer/main/header";

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
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

export default LoginLayout;
