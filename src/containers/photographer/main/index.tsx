"use client";

import { useState } from "react";
import { MainViewType } from "service-types";
import Preparing from "@/containers/ui/preparing";
import ReservationList from "../list";
import Controller from "./controller";
import { mainviewStyles } from "./main.css";

const MainView = () => {
  const [view, setView] = useState<MainViewType>("list");

  return (
    <div className={mainviewStyles.container}>
      <Controller view={view} setView={setView} />
      {view === "list" && <ReservationList />}
      {view === "calender" && <Preparing />}
    </div>
  );
};

export default MainView;
