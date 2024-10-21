"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ModalStyles } from "./ui.css";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={ModalStyles.background}
      onClick={() => router.back()}
      role="presentation"
    >
      <div
        className={ModalStyles.content}
        onClick={(e) => e.stopPropagation()}
        role="presentation"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
