import React from "react";
import { useTranslations } from "next-intl";
import BaseButton from "../ui/BaseButton";

const Main = () => {
  const t = useTranslations();

  return (
    <main className="section h-dvh flex justify-center items-center px-10 pt-40 lg:pt-20">
      <div className="w-150 flex flex-col items-center gap-10 text-center">
        <h1 className="text-3xl leading-10 font-bold text-shadow-lg relative z-20 text-white">
          {t("main.title")}
        </h1>
        <p className="text-sm text-shadow-lg relative z-20 text-white">
          {t("main.des")}
        </p>
        <BaseButton
          onClick={() => {
            const section = document.getElementById("overview");
            if (!section) return;
            section.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="w-50 h-12 flex justify-center items-center rounded-lg shadow-2xl relative z-20 border border-white/20 text-black bg-zinc-300 dark:text-white dark:bg-zinc-900"
        >
          {t("BaseButton.start")}
        </BaseButton>
      </div>
    </main>
  );
};

export default Main;
