import React from "react";
import TiltedCard from "@/components/TiltedCard";
import { useTranslations } from "next-intl";
import BaseLink from "./BaseLink";
import { FaExternalLinkAlt } from "react-icons/fa";

type colorObjType = {
  text: string;
  bg: string;
};

type contentType = {
  image: string;
  article1: string;
  article2: string;
  paragraph: string;
  hasButton?: boolean;
  buttonText?: string;
  colorObj?: colorObjType;
};

type BaseCardPropsType = {
  content: contentType;
  className?: string;
};

const BaseCard = React.forwardRef<HTMLDivElement, BaseCardPropsType>(
  ({ content, className }, ref) => {
    const t = useTranslations();

    return (
      <div
        ref={ref}
        className={`${className} no-scrollbar overflow-auto relative rounded-2xl p-10 w-full h-full flex flex-col gap-5 border border-zinc-500/30 bg-linear-120 from-zinc-100 via-zinc-300 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black`}
      >
        <div className="w-full flex justify-center items-center">
          <TiltedCard
            imageSrc={content.image}
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Image"
            containerHeight="300px"
            containerWidth="100%"
            imageHeight="300px"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
          />
        </div>
        <div className="w-full flex flex-col items-start pt-10 gap-10">
          <div
            className={`${content.colorObj?.bg} w-15 h-2 rounded-full`}
          ></div>
          <h1 className="text-zinc-900 dark:text-zinc-100">
            {t(content.article1)}
          </h1>
          <h1 className={`${content.colorObj?.text}`}>{t(content.article2)}</h1>
          <p
            className="leading-10 text-zinc-900 dark:text-zinc-100"
            title={t(content.paragraph)}
          >
            {t(content.paragraph)}
          </p>
          {content.hasButton && (
            <>
              <BaseLink className="w-full h-12 flex justify-center items-center relative rounded-full transition-all duration-300 border border-neutral-700 text-black bg-neutral-300 dark:text-white dark:bg-neutral-800 hover:bg-neutral-400 hover:dark:bg-neutral-700">
                <span className="w-10 h-10 flex justify-center items-center absolute top-0.5 left-1 bottom-0.5 rounded-full border border-neutral-500 text-black bg-white dark:text-white dark:bg-neutral-700">
                  <FaExternalLinkAlt />
                </span>
                <span className="">{t("BaseLink.price")}</span>
              </BaseLink>
            </>
          )}
        </div>
      </div>
    );
  },
);

BaseCard.displayName = "BaseCard";

export default BaseCard;
