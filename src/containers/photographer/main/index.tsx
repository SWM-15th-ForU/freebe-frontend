"use client";

import { useState } from "react";
import { MainViewType } from "service-types";
import ReservationList from "../list";
import Controller from "./controller";
import { mainviewStyles } from "./main.css";

const MainView = () => {
  const [view, setView] = useState<MainViewType>("list");

  return (
    <div className={mainviewStyles.container}>
      <Controller view={view} setView={setView} />
      {view === "list" && <ReservationList />}
      {view === "calender" && <div>캘린더</div>}
    </div>
  );
};

export default MainView;
