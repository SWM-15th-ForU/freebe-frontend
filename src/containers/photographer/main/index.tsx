"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MainViewType } from "service-types";
import { useDisclosure } from "@mantine/hooks";
import NoticeBanner from "@/containers/common/notice-banner";
import Preparing from "@/containers/ui/preparing";
import ReservationList from "../list";
import Controller from "./controller";
import Tutorial from "./tutorial";
import { mainviewStyles } from "./main.css";

const MainView = ({ tutorialParam }: { tutorialParam: boolean }) => {
  const router = useRouter();
  const [isOnTutorial, { open: openTutorial, close: closeTutorial }] =
    useDisclosure(tutorialParam, {
      onClose: () => {
        router.replace("/photographer");
      },
    });
  const [view, setView] = useState<MainViewType>("list");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  useEffect(() => {
    if (tutorialParam) {
      setView("list");
      setSelectedProducts([]);
      openTutorial();
    } else {
      closeTutorial();
    }
  }, [tutorialParam]);

  return (
    <div className={mainviewStyles.container}>
      <Tutorial close={closeTutorial} opened={isOnTutorial} />
      <Controller
        view={view}
        setView={setView}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      {view === "list" && (
        <ReservationList
          selectedProducts={selectedProducts}
          setDummyData={isOnTutorial}
        />
      )}
      {view === "calender" && <Preparing />}
      <NoticeBanner
        container={{ marginTop: "auto", alignSelf: "center" }}
        target="main"
      />
    </div>
  );
};

export default MainView;
