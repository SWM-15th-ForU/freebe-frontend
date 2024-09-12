import React from "react";
import { mypageStyles } from "./ui.css";

const MypageLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={mypageStyles.container}>
      <span className={mypageStyles.title}>{title}</span>
      {children}
    </div>
  );
};

export default MypageLayout;
