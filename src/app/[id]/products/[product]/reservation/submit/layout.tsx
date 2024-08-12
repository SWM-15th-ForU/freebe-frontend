"use client";

const SubmitLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <div style={{ position: "relative", overflowY: "hidden" }}>
      {children}
      {modal}
    </div>
  );
};

export default SubmitLayout;
