"use client";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Section from "./Section";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BaseCard from "../ui/BaseCard";
import BaseSlider from "../ui/BaseSlider";
import Footer from "./Footer";
import { useTranslations, useLocale } from "next-intl";

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

type cardsType = {
  id: number;
  content: contentType;
};

const Sections = () => {
  const t = useTranslations();
  const locale = useLocale();
  const sectionsContainerRef = React.useRef<HTMLDivElement | null>(null);
  const sectionsRef = React.useRef<HTMLElement[]>([]);
  const colors = t.raw("sections.section3.colors") as {
    name: string;
    code: string;
  }[];

  const sliderData = Array.from({ length: 45 }, (_, index) => {
    const num = index + 1;
    return {
      id: num,
      component: (
        <Image
          src={`/images/BaseSlider/${num}.jpeg`}
          loading="lazy"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          alt={`Image ${num}`}
        />
      ),
    };
  });

  const cards: cardsType[] = [
    {
      id: 1,
      content: {
        image: "/images/Section/1.webp",
        article1: "sections.section2.card1.article1",
        article2: "sections.section2.card1.article2",
        paragraph: "sections.section2.card1.paragraph",
        colorObj: { text: "text-blue-500", bg: "bg-blue-500" },
      },
    },
    {
      id: 2,
      content: {
        image: "/images/Section/2.webp",
        article1: "sections.section2.card2.article1",
        article2: "sections.section2.card2.article2",
        paragraph: "sections.section2.card2.paragraph",
        colorObj: { text: "text-indigo-500", bg: "bg-indigo-500" },
      },
    },
    {
      id: 3,
      content: {
        image: "/images/Section/3.webp",
        article1: "sections.section2.card3.article1",
        article2: "sections.section2.card3.article2",
        paragraph: "sections.section2.card3.paragraph",
        colorObj: { text: "text-emerald-500", bg: "bg-emerald-500" },
      },
    },
  ];

  const combinedSectionsData = [
    {
      id: 1,
      component: {
        copy1: (
          <div className="section w-300 h-full">
            <BaseSlider slidesData={sliderData} />
          </div>
        ),
        copy2: (
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-sm font-semibold tracking-[0.3rem] text-white uppercase">
                {t("sections.section1.subtitle")}
              </span>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                {t("sections.section1.title")}
              </h2>
              <div className="w-16 h-0.5 bg-white mt-1" />
              <p className="text-base text-zinc-900 dark:text-zinc-100 max-w-md mt-2">
                {t("sections.section1.description")}
              </p>
            </div>
            <div className="w-full h-full">
              <BaseSlider slidesData={sliderData} />
            </div>
          </div>
        ),
      },
    },
    {
      id: 2,
      component: {
        copy1: (
          <div className="section w-full h-full grid grid-cols-1 grid-rows-3 gap-5 lg:w-350 lg:grid-cols-3 lg:grid-rows-1">
            {cards.map((card) => (
              <BaseCard className="" key={card.id} content={card.content} />
            ))}
          </div>
        ),
        copy2: (
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-sm font-semibold tracking-[0.3rem] text-white uppercase">
                {t("sections.section2.subtitle")}
              </span>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                {t("sections.section2.title")}
              </h2>
              <div className="w-16 h-0.5 bg-white mt-1" />
              <p className="text-base text-zinc-900 dark:text-zinc-100 max-w-md mt-2">
                {t("sections.section2.description")}
              </p>
            </div>
            <div className="w-full h-full grid grid-cols-1 grid-rows-3 gap-5 lg:w-350 lg:grid-cols-3 lg:grid-rows-1">
              {cards.map((card) => (
                <BaseCard className="" key={card.id} content={card.content} />
              ))}
            </div>
          </div>
        ),
      },
    },
    {
      id: 3,
      component: {
        copy1: (
          <div className="section w-full h-full grid grid-cols-1 auto-rows-auto gap-5 lg:w-350 lg:grid-cols-4 lg:grid-rows-3">
            {colors.map((color) => (
              <div
                key={color.code}
                className="w-full h-full flex flex-col justify-end p-5 rounded-2xl overflow-hidden relative group border border-transparent dark:border-[#C9A227]/10"
                style={{ backgroundColor: color.code }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="relative z-10 text-white">
                  <p className="text-lg font-semibold">{color.name}</p>
                  <p className="text-sm opacity-80">{color.code}</p>
                </div>
              </div>
            ))}
          </div>
        ),
        copy2: (
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-sm font-semibold tracking-[0.3rem] text-white uppercase">
                {t("sections.section3.subtitle")}
              </span>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                {t("sections.section3.title")}
              </h2>
              <div className="w-16 h-0.5 bg-white mt-1" />
              <p className="text-base text-zinc-900 dark:text-zinc-100 max-w-md mt-2">
                {t("sections.section3.description")}
              </p>
            </div>
            <div className="w-full h-full grid grid-cols-1 auto-rows-auto gap-5 lg:w-350 lg:grid-cols-4 lg:grid-rows-3">
              {colors.map((color) => (
                <div
                  key={color.code}
                  className="w-full h-full flex flex-col justify-end p-5 rounded-2xl overflow-hidden relative group border border-transparent dark:border-[#C9A227]/10"
                  style={{ backgroundColor: color.code }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="relative z-10 text-white">
                    <p className="text-lg font-semibold">{color.name}</p>
                    <p className="text-sm opacity-80">{color.code}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    },
    {
      id: 4,
      component: {
        copy1: (
          <div className="section w-full h-full flex flex-col justify-center rounded-2xl overflow-hidden p-10 gap-6 border border-black/50 dark:border-white/30  bg-zinc-100 dark:bg-black lg:w-150">
            {(
              t.raw("sections.section4.features") as {
                title: string;
                desc: string;
              }[]
            ).map((feature, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="w-10 h-10 min-w-10 rounded-full text-black bg-zinc-100 dark:bg-zinc-800 dark:text-white flex items-center justify-center font-bold text-lg group-hover:text-zinc-800 dark:group-hover:text-zinc-700 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {feature.title}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-white mt-1">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ),
        copy2: (
          <div className="w-full h-full flex flex-col justify-center rounded-2xl overflow-hidden p-10 gap-6 border border-black/50 dark:border-white/30  bg-zinc-100 dark:bg-black lg:w-150">
            {(
              t.raw("sections.section4.features") as {
                title: string;
                desc: string;
              }[]
            ).map((feature, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="w-10 h-10 min-w-10 rounded-full text-black bg-zinc-100 dark:bg-zinc-800 dark:text-white flex items-center justify-center font-bold text-lg group-hover:text-zinc-800 dark:group-hover:text-zinc-700 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {feature.title}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-white mt-1">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ),
      },
    },
    {
      id: 5,
      component: {
        copy1: (
          <div className="section w-full h-200 lg:w-150 lg:h-full">
            <div className="w-full h-full flex flex-col justify-center items-center relative rounded-2xl overflow-hidden border border-zinc-500/30 bg-linear-120 from-zinc-100 via-zinc-300 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black">
              <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(circle_at_top_right,#71717b,transparent_60%)]" />
              <span className="relative z-10 text-[10rem] leading-none font-bold text-zinc-800 dark:text-white">
                7
              </span>
              <span className="relative z-10 text-2xl font-semibold mt-3 tracking-wide text-zinc-900 dark:text-white">
                {t("sections.section4.years")}
              </span>
              <div className="relative z-10 w-16 h-0.5 bg-white mt-5" />
              <p className="relative z-10 text-sm mt-5 text-center max-w-xs text-zinc-800 dark:text-zinc-100">
                {t("sections.section4.description")}
              </p>
            </div>
          </div>
        ),
        copy2: (
          <div className="w-full h-200 lg:w-150 lg:h-full">
            <div className="w-full h-full flex flex-col justify-center items-center relative rounded-2xl overflow-hidden border border-zinc-500/30 bg-linear-120 from-zinc-100 via-zinc-300 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black">
              <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(circle_at_top_right,#71717b,transparent_60%)]" />
              <span className="relative z-10 text-[10rem] leading-none font-bold text-zinc-800 dark:text-white">
                7
              </span>
              <span className="relative z-10 text-2xl font-semibold mt-3 tracking-wide text-zinc-900 dark:text-white">
                {t("sections.section4.years")}
              </span>
              <div className="relative z-10 w-16 h-0.5 bg-white mt-5" />
              <p className="relative z-10 text-sm mt-5 text-center max-w-xs text-zinc-800 dark:text-zinc-100">
                {t("sections.section4.description")}
              </p>
            </div>
          </div>
        ),
      },
    },
    {
      id: 6,
      component: {
        copy1: (
          <div className="section w-350 h-full flex flex-col gap-10 justify-between">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-sm font-semibold tracking-[0.3rem] text-white uppercase">
                {t("sections.section5.subtitle")}
              </span>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                {t("sections.section5.title")}
              </h2>
              <div className="w-16 h-0.5 bg-white mt-1" />
              <p className="text-base text-zinc-900 dark:text-zinc-100 max-w-md mt-2">
                {t("sections.section5.description")}
              </p>
            </div>
            <div className="w-full grid grid-cols-3 grid-rows-2 gap-5 ">
              {(
                t.raw("sections.section5.testimonials") as {
                  name: string;
                  role: string;
                  review: string;
                }[]
              ).map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col justify-between rounded-2xl border border-zinc-500/30 bg-linear-120 from-zinc-100 via-zinc-300 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black p-8 relative overflow-hidden group shadow-sm dark:shadow-none"
                >
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,#71717b,transparent_60%)]" />
                  <span className="relative z-10 text-6xl font-serif text-white leading-none opacity-70"></span>
                  <p className="relative z-10 text-zinc-900 dark:text-zinc-100 text-base leading-relaxed mt-2">
                    {testimonial.review}
                  </p>
                  <div className="relative z-10 flex items-center gap-3 mt-6 pt-5 border-t border-black/20">
                    <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg dark:bg-white dark:text-black">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-black dark:text-white font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-zinc-900 dark:text-white text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
        copy2: (
          <div className="section w-full h-full flex flex-col gap-10 justify-between">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-sm font-semibold tracking-[0.3rem] text-white uppercase">
                {t("sections.section5.subtitle")}
              </span>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                {t("sections.section5.title")}
              </h2>
              <div className="w-16 h-0.5 bg-white mt-1" />
              <p className="text-base text-zinc-900 dark:text-zinc-100 max-w-md mt-2">
                {t("sections.section5.description")}
              </p>
            </div>
            <div className="w-full grid grid-cols-1 auto-cols-auto gap-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
              {(
                t.raw("sections.section5.testimonials") as {
                  name: string;
                  role: string;
                  review: string;
                }[]
              ).map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col justify-between rounded-2xl border border-zinc-500/30 bg-linear-120 from-zinc-100 via-zinc-300 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black p-8 relative overflow-hidden group shadow-sm dark:shadow-none"
                >
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,#71717b,transparent_60%)]" />
                  <span className="relative z-10 text-6xl font-serif text-white leading-none opacity-70"></span>
                  <p className="relative z-10 text-zinc-900 dark:text-zinc-100 text-base leading-relaxed mt-2">
                    {testimonial.review}
                  </p>
                  <div className="relative z-10 flex items-center gap-3 mt-6 pt-5 border-t border-black/20">
                    <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg dark:bg-white dark:text-black">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-black dark:text-white font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-zinc-900 dark:text-white text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionsContainerRef.current) return;
    const container = sectionsContainerRef.current;
    const sections = sectionsRef.current;
    const totalWidthOfAllSections = sections.reduce(
      (total, section) => total + section.offsetWidth,
      0,
    );
    const scrollDistance = totalWidthOfAllSections - window.innerWidth;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        scrub: true,
        pin: true,
        end: () => `+=${scrollDistance}`,
      },
    });
    tl.fromTo(
      sections,
      {
        x: locale === "ar" ? scrollDistance : -scrollDistance,
      },
      {
        x: locale === "ar" ? -scrollDistance : scrollDistance,
        ease: "none",
      },
    );
  }, []);

  return (
    <>
      <Header />
      <Main />
      <div
        className="hidden lg:h-dvh lg:overflow-hidden lg:flex lg:flex-row-reverse lg:justify-center lg:gap-5 lg:pt-30 lg:pb-5 lg:rounded-2xl"
        id="overview"
        ref={sectionsContainerRef}
      >
        {combinedSectionsData.map((section, index) => (
          <Section
            ref={(element) => {
              if (element) {
                sectionsRef.current[index] = element;
              }
            }}
            key={section.id}
            className="h-full"
          >
            {section.component.copy1}
          </Section>
        ))}
      </div>
      <div className="flex flex-col gap-10 p-5 lg:hidden">
        {combinedSectionsData.map((section) => (
          <Section key={section.id} className="w-full">
            {section.component.copy2}
          </Section>
        ))}
      </div>
      <div className="px-5 pb-5">
        <Footer />
      </div>
    </>
  );
};

export default Sections;
