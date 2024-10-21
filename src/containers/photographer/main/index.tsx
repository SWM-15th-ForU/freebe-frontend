"use client";

import { useState } from "react";
import { MainViewType } from "service-types";
import Preparing from "@/containers/ui/preparing";
import ReservationList from "../list";
import Controller from "./controller";
import { mainviewStyles } from "./main.css";

const MainView = () => {
  const [view, setView] = useState<MainViewType>("list");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  return (
    <div className={mainviewStyles.container}>
      <Controller
        view={view}
        setView={setView}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      {view === "list" && (
        <ReservationList selectedProducts={selectedProducts} />
      )}
      {view === "calender" && <Preparing />}
    </div>
  );
};

export default MainView;
