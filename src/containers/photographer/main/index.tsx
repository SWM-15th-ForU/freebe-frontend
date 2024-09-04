"use client";

import { useState } from "react";
import { MainViewType } from "service-types";
import Controller from "./controller";
import { mainviewStyles } from "./main.css";

const MainView = () => {
  const [view, setView] = useState<MainViewType>("list");

  return (
    <div className={mainviewStyles.container}>
      <Controller view={view} setView={setView} />
      {view === "list" && <div>리스트</div>}
      {view === "calender" && <div>캘린더</div>}
    </div>
  );
};

export default MainView;
