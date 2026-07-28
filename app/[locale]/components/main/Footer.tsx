import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="section relative w-full rounded-2xl bg-linear-to-b from-zinc-100 to-zinc-300 dark:from-zinc-900 dark:to-black border-t border-zinc-400/30 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(circle_at_top,#71717b,transparent_60%)]" />
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-zinc-400 to-transparent" />
      <div className="relative max-w-350 mx-auto px-8 md:px-16 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          <div className="md:col-span-1 flex flex-col gap-5">
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-wide">
              {t("footer.logo")}
            </h3>
            <div className="w-14 h-0.5 bg-zinc-400" />
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold tracking-[0.25em] text-zinc-900 dark:text-zinc-100 uppercase mb-2">
              {t("footer.contactTitle")}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-zinc-400/10 flex items-center justify-center text-zinc-900 dark:text-zinc-100 text-xs">
                  ☎
                </span>
                <span className="text-zinc-900 dark:text-zinc-100">
                  {t("footer.phone")}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-zinc-400/10 flex items-center justify-center text-zinc-900 dark:text-zinc-100 text-xs">
                  ✉
                </span>
                <span className="text-zinc-900 dark:text-zinc-100">
                  {t("footer.email")}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-zinc-400/10 flex items-center justify-center text-zinc-900 dark:text-zinc-100 text-xs">
                  ⚲
                </span>
                <span className="text-zinc-900 dark:text-zinc-100">
                  {t("footer.address")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-zinc-900 dark:text-zinc-100">
            {t("footer.copyright", {
              year: new Date().getFullYear(),
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
